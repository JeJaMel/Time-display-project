import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [FormsModule, NgIf],
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';
  isLoading: boolean = false; 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.emailError = '';
    this.passwordError = '';
    this.isLoading = true; 

    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.isLoading = false; 
        this.router.navigate(['/clock']);
      })
      .catch((error: any) => {
        this.isLoading = false; 
        if (error.code === 'auth/invalid-email') {
          this.emailError = 'Invalid email address.';
        } else if (error.code === 'auth/wrong-password') {
          this.passwordError = 'Incorrect password.';
        } else if (error.code === 'auth/user-not-found') {
          this.emailError = 'User not found.';
        } else {
          this.emailError = 'Login failed. Please check your credentials.';
          this.passwordError = 'Login failed. Please check your credentials.';
        }
      });
  }

  register() {
    this.emailError = '';
    this.passwordError = '';
    this.isLoading = true;

    this.authService
      .register(this.email, this.password)
      .then(() => {
        this.isLoading = false; 
        this.router.navigate(['/clock']);
      })
      .catch((error: any) => {
        this.isLoading = false; 
        if (error.code === 'auth/email-already-in-use') {
          this.emailError = 'This email is already in use.';
        } else if (error.code === 'auth/weak-password') {
          this.passwordError = 'The password is too weak.';
        } else if (error.code === 'auth/invalid-email') {
          this.emailError = 'Invalid email address.';
        } else {
          this.emailError = 'Registration failed. Please try again.';
          this.passwordError = 'Registration failed. Please try again.';
        }
      });
  }
}
