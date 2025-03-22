import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dot-matrix-clock',
  template: `
    <div class="dot-matrix-clock">
      <div class="digit-container" *ngFor="let digit of displayDigits">
        <div class="dot-row" *ngFor="let row of digit">
          <div class="dot" *ngFor="let dot of row" [class.active]="dot"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dot-matrix-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DotMatrixClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  displayDigits: boolean[][][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    const timeString = hours + minutes + seconds; 

    this.displayDigits = timeString
      .split('')
      .map((digit) => this.getDigitPattern(Number(digit)));
  }

  getDigitPattern(digit: number): boolean[][] {
    // Define corrected patterns for digits 0-9 (5x7 matrix)
    const patterns: boolean[][][] = [
      [
        // 0
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [false, true, true, true, false],
      ],
      [
        // 1
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
      ],
      [
        // 2
        [false, true, true, true, false],
        [true, false, false, false, true],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, false, false],
        [true, false, false, false, false],
        [false, true, true, true, true],
      ],
      [
        // 3
        [true, true, true, true, true],
        [false, false, false, false, true],
        [false, false, false, true, false],
        [false, true, true, true, false],
        [false, false, false, true, false],
        [false, false, false, false, true],
        [true, true, true, true, true],
      ],
      [
        // 4 (Fixed)
        [false, false, false, true, false],
        [false, false, true, true, false],
        [false, true, false, true, false],
        [true, false, false, true, false],
        [true, true, true, true, true],
        [false, false, false, true, false],
        [false, false, false, true, false],
      ],
      [
        // 5
        [true, true, true, true, true],
        [true, false, false, false, false],
        [true, true, true, true, false],
        [false, false, false, false, true],
        [false, false, false, false, true],
        [true, false, false, false, true],
        [true, true, true, true, true],
      ],
      [
        // 6
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, false],
        [true, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [false, true, true, true, false],
      ],
      [
        // 7
        [true, true, true, true, true],
        [false, false, false, false, true],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, false, false],
        [true, false, false, false, false],
        [true, false, false, false, false],
      ],
      [
        // 8
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [false, true, true, true, false],
      ],
      [
        // 9
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [false, true, true, true, true],
        [false, false, false, false, true],
        [true, false, false, false, true],
        [false, true, true, true, false],
      ],
    ];

    return patterns[digit];
  }
}
