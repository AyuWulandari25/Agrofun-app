import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Output() Login!: EventEmitter<{ email: string; password: string }>;
  loginForm!: FormGroup;

  loader: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService
  ) {
    this.Login = new EventEmitter<{ email: string; password: string }>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onLogin() {
    const data = this.Login.emit(this.loginForm.value);
    this.authservice.login(this.loginForm.value);
  }
}
