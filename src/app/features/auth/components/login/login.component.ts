// angular import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  // public method
  loginForm!: FormGroup;
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google',
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter',
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['info@codedthemes.com', [Validators.required, Validators.email]],
      password: ['123456789', [Validators.required, Validators.minLength(6)]],
      keepSignedIn: [true],
    });
  }
  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    const val = this.loginForm.value;
    console.log('dsds', val);
    // this._authServices.login(userName, userPass);
  }
}
