import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-morse-code-clock',
  templateUrl: './morse-code-clock.component.html',
  styleUrls: ['./morse-code-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MorseCodeClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  morseHours: string[] = [];
  morseMinutes: string[] = [];
  morseSeconds: string[] = [];

  morseCodeMap: { [key: string]: string } = {
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    this.morseHours = this.getMorseCode(hours);
    this.morseMinutes = this.getMorseCode(minutes);
    this.morseSeconds = this.getMorseCode(seconds);
  }

  getMorseCode(digits: string): string[] {
    return digits.split('').map((digit) => this.morseCodeMap[digit] || '');
  }
}
