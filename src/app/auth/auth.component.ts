import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [FormsModule],
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/clock']);
      })
      .catch((error) => console.error(error));
  }

  register() {
    this.authService
      .register(this.email, this.password)
      .then(() => {
        this.router.navigate(['/clock']);
      })
      .catch((error) => console.error(error));
  }
}
