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
import { AuthService } from '../../service/auth.service';

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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  login(email: string, password: string, keepSignedIn: boolean) {
    const params = {
      email: email,
      password: password,
      // keepSignedIn: keepSignedIn,
    };
    this.authService.login(params).subscribe((res) => {
      console.log(res);
    });
  }
}
