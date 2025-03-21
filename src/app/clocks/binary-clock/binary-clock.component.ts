import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-binary-clock',
  template: `
    <div class="binary-clock">
      <div class="clock-section">
        <div class="binary-digit-column" *ngFor="let column of hourColumns; let i = index">
          <div class="binary-digit" [class.active]="hourRows[i] === '1'"></div>
        </div>
      </div>
      <div class="clock-section">
        <div class="binary-digit-column" *ngFor="let column of minuteColumns; let i = index">
          <div class="binary-digit" [class.active]="minuteRows[i] === '1'"></div>
        </div>
      </div>
      <div class="clock-section">
        <div class="binary-digit-column" *ngFor="let column of secondColumns; let i = index">
          <div class="binary-digit" [class.active]="secondRows[i] === '1'"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./binary-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BinaryClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hourRows: string[] = [];
  minuteRows: string[] = [];
  secondRows: string[] = [];

  hourColumns = [32, 16, 8, 4, 2, 1];
  minuteColumns = [32, 16, 8, 4, 2, 1];
  secondColumns = [32, 16, 8, 4, 2, 1];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    this.hourRows = this.toBinaryArray(time.getHours());
    this.minuteRows = this.toBinaryArray(time.getMinutes());
    this.secondRows = this.toBinaryArray(time.getSeconds());
  }

  toBinaryArray(num: number): string[] {
    const binary = num.toString(2).padStart(6, '0');
    return binary.split('');
  }
}