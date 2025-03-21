import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ClockComponent } from './clocks/clock/clock.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'clock', component: ClockComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];