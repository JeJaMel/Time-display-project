import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-time-slider',
  templateUrl: './time-slider.component.html',
  styleUrls: ['./time-slider.component.css']
})
export class TimeSliderComponent {
  @Output() timeChanged = new EventEmitter<Date>();

  currentTime: Date = new Date();
  hours: number = this.currentTime.getHours();
  minutes: number = this.currentTime.getMinutes();
  seconds: number = this.currentTime.getSeconds();

  onSliderChange() {
    const newTime = new Date();
    newTime.setHours(this.hours);
    newTime.setMinutes(this.minutes);
    newTime.setSeconds(this.seconds);
    this.timeChanged.emit(newTime);
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