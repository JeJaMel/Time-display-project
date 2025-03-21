import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { TimeService } from '../services/time.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-slider',
  templateUrl: './time-slider.component.html',
  styleUrls: ['./time-slider.component.css'],
  standalone: true,
})
export class TimeSliderComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  hours: number = this.currentTime.getHours();
  minutes: number = this.currentTime.getMinutes();
  seconds: number = this.currentTime.getSeconds();
  private timeSubscription: Subscription = new Subscription;
  @Output() timeChanged = new EventEmitter<Date>(); // Modify here

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeSubscription = this.timeService.currentTime$.subscribe(time => {
      this.currentTime = time;
      this.hours = this.currentTime.getHours();
      this.minutes = this.currentTime.getMinutes();
      this.seconds = this.currentTime.getSeconds();
    });
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }

  onSliderChange() {
    const newTime = new Date();
    newTime.setHours(Number(this.hours));
    newTime.setMinutes(Number(this.minutes));
    newTime.setSeconds(Number(this.seconds));
    this.timeService.setTime(newTime);
    this.timeChanged.emit(newTime); // Modified: Emit the newTime object
  }
  onHoursChange(event: any){
    this.hours = event.target.value;
    this.onSliderChange();
  }
  onMinutesChange(event: any){
    this.minutes = event.target.value;
    this.onSliderChange();
  }
  onSecondsChange(event: any){
    this.seconds = event.target.value;
    this.onSliderChange();
  }
}