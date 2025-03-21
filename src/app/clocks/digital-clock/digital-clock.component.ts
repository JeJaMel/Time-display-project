import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { ClockDisplay, CLOCK_DISPLAY } from '../clock-display.interface';
@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
   providers: [{ provide: CLOCK_DISPLAY, useExisting: DigitalClockComponent }],
})
export class DigitalClockComponent implements ClockDisplay, OnChanges {
  @Input() time: Date = new Date();
  formattedTime: string = '';

   ngOnChanges(changes: SimpleChanges): void {
     if(changes['time']){
        this.updateTime(this.time);
     }
  }

  updateTime(time: Date): void {
    this.formattedTime = time.toLocaleTimeString();
  }
}