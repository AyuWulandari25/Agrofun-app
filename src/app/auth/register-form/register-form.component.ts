import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Output() register!: EventEmitter<{
    username: string;
    email: string;
    password: string;
  }>;
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService
  ) {
    this.register = new EventEmitter<{
      username: string;
      email: string;
      password: string;
    }>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onRegister() {
    const data = this.register.emit(this.registerForm.value);
    this.authservice.createUser(this.registerForm.value);
  }
}
