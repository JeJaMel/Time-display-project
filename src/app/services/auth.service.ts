import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = new Observable(subscriber => {
      const unsubscribe = this.auth.onAuthStateChanged(user => {
        subscriber.next(user);
      }, error => {
        subscriber.error(error);
      });
      return () => unsubscribe(); // Cleanup on unsubscribe
    });
  }

  register(email: string, password: string): Observable<any> { 
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(error => {
        console.error("Registration error:", error);
        return of({ error: error.message }); // Return an error object
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(error => {
        console.error("Login error:", error);
        return of({ error: error.message });
      })
    );
  }

  logout(): Observable<any> {
    return from(signOut(this.auth)).pipe(
      catchError(error => {
        console.error("Logout error:", error);
        return of({ error: error.message }); // Return an error object
      })
    );
  }

  checkAuthStatus(): Observable<boolean> {
    return this.user$.pipe(map(user => !!user));
  }
}