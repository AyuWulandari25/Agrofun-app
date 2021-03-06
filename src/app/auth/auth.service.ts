import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

const apiURL: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private UserId!: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  public isAuth(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      return true;
    }
  }

  login(data: any) {
    return this.http.post(`${apiURL}/login`, data).subscribe(
      (response: any) => {
        this.token = response.AccessToken;
        localStorage.setItem('token', response.AccessToken);
        localStorage.setItem('userId', response.data._id);
        // localStorage.setItem('expiration', response.data.expiresIn);

        if (response.success) {
          const expiresInDuration = response.data.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.UserId = response.data._id;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(this.token, expirationDate, this.UserId);
        }
        this.router.navigate(['/']);
        Swal.fire('Success', 'Login success..', 'success');
      },
      (error) => {
        if (error.error.msg === 'Your email is wrong') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your email is wrong!',
          });
        }

        if (error.error.msg === 'Your password is wrong') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your password is wrong!',
          });
        }
      }
    );
  }

  createUser(data: any) {
    return this.http.post(`${apiURL}/register`, data).subscribe(
      (response: any) => {
        if (response.success) {
          this.authStatusListener.next(true);
        }
        this.router.navigate(['/login']);
        Swal.fire('Success', 'Register success..', 'success');
      },
      (error) => {
        if (error.error.msg === 'Please input username, email and password') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please input username, email and password',
          });
        }
      }
    );
  }

  getToken(): any {
    return this.token;
  }

  getIsAuth(): any {
    return this.isAuthenticated;
  }

  getUserId(): any {
    return this.UserId;
  }

  getAuthStatusListener(): any {
    return this.authStatusListener.asObservable();
  }

  autoAuthUser(): any {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.UserId = authInformation.UserId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout(): any {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.UserId = null;
    this.clearAuthData();
    setTimeout(() => window.location.reload(), 1000);
  }

  private clearAuthData(): any {
    localStorage.removeItem('expiration');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  private setAuthTimer(duration: number): any {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    UserId: string
  ): any {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', UserId);
  }

  private getAuthData(): any {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const UserId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      UserId,
    };
  }
}
