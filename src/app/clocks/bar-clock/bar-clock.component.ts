import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar-clock',
  template: `
    <div class="bar-clock">
      <div class="time-section">
        <div class="label">Hours</div>
        <div class="bar-container">
          <div class="bar" [style.width.%]="hourPercentage"></div>
        </div>
        <div class="time-value">{{ hours }}</div>
      </div>

      <div class="time-section">
        <div class="label">Minutes</div>
        <div class="bar-container">
          <div class="bar" [style.width.%]="minutePercentage"></div>
        </div>
        <div class="time-value">{{ minutes }}</div>
      </div>

      <div class="time-section">
        <div class="label">Seconds</div>
        <div class="bar-container">
          <div class="bar" [style.width.%]="secondPercentage"></div>
        </div>
        <div class="time-value">{{ seconds }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./bar-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BarClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  hourPercentage: number = 0;
  minutePercentage: number = 0;
  secondPercentage: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    this.hourPercentage = (this.hours / 24) * 100; 
    this.minutePercentage = (this.minutes / 60) * 100;
    this.secondPercentage = (this.seconds / 60) * 100;
  }
}