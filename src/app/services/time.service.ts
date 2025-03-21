import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimeService {
  private currentTime = new BehaviorSubject(new Date());
  currentTime$ = this.currentTime.asObservable();

  setTime(date: Date) {
    this.currentTime.next(date);
  }
}