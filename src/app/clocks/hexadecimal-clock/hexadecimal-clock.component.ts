import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hexadecimal-clock',
  template: `
    <div class="hexadecimal-clock-container">
      <div class="hexadecimal-clock">
        <span class="time-segment">{{ hexHours }}</span
        >: <span class="time-segment">{{ hexMinutes }}</span
        >:
        <span class="time-segment">{{ hexSeconds }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./hexadecimal-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HexadecimalClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hexHours: string = '00';
  hexMinutes: string = '00';
  hexSeconds: string = '00';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    this.hexHours = this.toHex(time.getHours());
    this.hexMinutes = this.toHex(time.getMinutes());
    this.hexSeconds = this.toHex(time.getSeconds());
  }

  toHex(num: number): string {
    return num.toString(16).toUpperCase().padStart(2, '0');
  }
}
