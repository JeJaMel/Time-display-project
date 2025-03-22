import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solar-system-clock',
  templateUrl: './solar-system-clock.component.html',
  styleUrls: ['./solar-system-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SolarSystemClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hourRotation: number = 0;
  minuteRotation: number = 0;
  secondRotation: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    this.hourRotation = ((hours % 12) / 12) * 360 - 90;
    this.minuteRotation = (minutes / 60) * 360 - 90;
    this.secondRotation = (seconds / 60) * 360 - 90;
  }
}
