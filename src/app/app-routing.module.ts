import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component'; 

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'clock', component: AppComponent }, // Route to AppComponent
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
  { path: '**', redirectTo: '/clock' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }