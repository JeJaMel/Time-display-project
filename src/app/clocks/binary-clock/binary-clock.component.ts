import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-binary-clock',
  template: `
    <div class="binary-clock">
      <div class="binary-digit" *ngFor="let row of hourRows">
        {{ row }}
      </div>
      <div class="binary-digit" *ngFor="let row of minuteRows">
        {{ row }}
      </div>
      <div class="binary-digit" *ngFor="let row of secondRows">
        {{ row }}
      </div>
    </div>
  `,
  styleUrls: ['./binary-clock.component.css'],
  standalone: true,
})
export class BinaryClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hourRows: string[] = [];
  minuteRows: string[] = [];
  secondRows: string[] = [];

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
    const binary = num.toString(2).padStart(6, '0'); // Pad to 6 bits
    return binary.split('');
  }
}