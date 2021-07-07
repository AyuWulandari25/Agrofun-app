import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const apiURL: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  getOneUser(id: string): any {
    return this.http.get(`${apiURL}/user/${id}/detail`);
  }
}
