import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-textual-clock',
  template: `
    <div class="textual-clock">
      It is {{ hourText }} hours, {{ minuteText }} minutes, and {{ secondText }} seconds.
    </div>
  `,
  standalone: true,
})
export class TextualClockComponent implements OnChanges {
  @Input() time: Date = new Date();

  hourText: string = '';
  minuteText: string = '';
  secondText: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date) {
    this.hourText = this.numberToText(time.getHours());
    this.minuteText = this.numberToText(time.getMinutes());
    this.secondText = this.numberToText(time.getSeconds());
  }

  numberToText(num: number): string {
    const numbers = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    if (num < 20) {
      return numbers[num];
    }
    const tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
    ];
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return tens[ten] + (one > 0 ? ' ' + numbers[one] : '');
  }
}