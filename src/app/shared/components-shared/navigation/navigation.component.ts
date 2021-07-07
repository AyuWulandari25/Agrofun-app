import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isShown: boolean = false;
  userName!: string;
  isLogin!: boolean;
  isRegister!: boolean;
  isUser!: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userLogin: any = localStorage.getItem('userId');
    this.userService.getOneUser(userLogin).subscribe((response: any) => {
      this.userName = response.data.username;
    });

    const tokenLogin: any = localStorage.getItem('token');
    if (!tokenLogin) {
      this.isLogin = true;
      this.isRegister = true;
      this.isUser = false;
    } else {
      this.isLogin = false;
      this.isRegister = false;
      this.isUser = true;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }
}
