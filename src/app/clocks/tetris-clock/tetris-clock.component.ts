import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tetris-clock',
  templateUrl: './tetris-clock.component.html',
  styleUrls: ['./tetris-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TetrisClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  digitShapes: number[][][] = []; //3D array to hold the shapes for each digit.

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    this.hours = String(time.getHours()).padStart(2, '0');
    this.minutes = String(time.getMinutes()).padStart(2, '0');
    this.seconds = String(time.getSeconds()).padStart(2, '0');

    const timeString = this.hours + this.minutes + this.seconds;

    this.digitShapes = timeString
      .split('')
      .map((digit) => this.getDigitShape(Number(digit)));
  }

  getDigitShape(digit: number): number[][] {
    const shapes: number[][][] = [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ], // 0
      [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ], // 1
      [
        [1, 1, 0],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
      ], // 2
      [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
      ], // 3
      [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
      ], // 4
      [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
      ], // 5
      [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ], // 6
      [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ], // 7
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ], // 8
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
      ], // 9
    ];
    return shapes[digit];
  }
}
