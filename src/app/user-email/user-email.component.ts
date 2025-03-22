// user-email.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-email',
  template: `
    <div class="email-container">
      <button class="email-button" (click)="displayEmail()">Show Email</button>
      <p *ngIf="showEmail" class="email-text">{{ userEmail }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./user-email.component.css'], // Add CSS file
})
export class UserEmailComponent implements OnInit, OnDestroy {
  userEmail: string | null = null;
  showEmail: boolean = false;
  private userEmailSubscription: Subscription = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userEmailSubscription = this.authService
      .getUserEmail()
      .subscribe((email) => {
        this.userEmail = email;
      });
  }

  ngOnDestroy(): void {
    this.userEmailSubscription.unsubscribe();
  }

  displayEmail() {
    this.showEmail = true;

    // Wait for 5 seconds, then apply the fade-out animation
    setTimeout(() => {
      const emailTextElement = document.querySelector('.email-text');
      if (emailTextElement) {
        emailTextElement.classList.add('fade-out'); // Add fade-out class
      }

      // Wait for the fade-out animation to complete (0.5s), then hide the email
      setTimeout(() => {
        this.showEmail = false;
        if (emailTextElement) {
          emailTextElement.classList.remove('fade-out'); // Remove fade-out class for future use
        }
      }, 500); // Match the duration of the fade-out animation
    }, 3000); // Wait 5 seconds before starting fade-out
  }
}
