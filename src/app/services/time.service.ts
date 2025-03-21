import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private _currentTime: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  currentTime$: Observable<Date> = this._currentTime.asObservable();

  constructor() {
    // setInterval(() => {
    //   this.setTime(new Date());
    // }, 1000);
  }

  setTime(newTime: Date) {
    this._currentTime.next(newTime);
  }
}