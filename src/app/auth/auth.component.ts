import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router to navigate after login
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <input type="email" [(ngModel)]="email" placeholder="Email">
      <input type="password" [(ngModel)]="password" placeholder="Password">
      <button (click)="login()">Login</button>
      <button (click)="register()">Register</button>
    </div>
  `,
  styles: [
    `.auth-container { display: flex; flex-direction: column; max-width: 300px; margin: auto; }`,
    `input { margin: 5px 0; padding: 8px; font-size: 14px; }`,
    `button { margin: 5px 0; padding: 10px; font-size: 14px; cursor: pointer; }`
  ],
  imports: [NgIf, FormsModule],
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/clock']); // Redirect on success
      })
      .catch(error => console.error(error));
  }

  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        this.router.navigate(['/clock']); // Redirect on success
      })
      .catch(error => console.error(error));
  }
}