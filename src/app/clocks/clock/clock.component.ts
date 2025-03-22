import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClockSelectorComponent } from '../../clock-selector/clock-selector.component';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { BinaryClockComponent } from '../binary-clock/binary-clock.component';
import { TimeService } from '../../services/time.service';
import { Subscription } from 'rxjs';
import { TimeSliderComponent } from '../../time-slider/time-slider.component';
import { TextualClockComponent } from '../textual-clock/textual-clock.component';
import { NgIf } from '@angular/common';
import { BarClockComponent } from '../bar-clock/bar-clock.component';
import { DotMatrixClockComponent } from '../dot-matrix-clock/dot-matrix-clock.component';
import { HexadecimalClockComponent } from '../hexadecimal-clock/hexadecimal-clock.component';
import { TetrisClockComponent } from "../tetris-clock/tetris-clock.component";

@Component({
  selector: 'app-clock',
  standalone: true,
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  imports: [
    ClockSelectorComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    BinaryClockComponent,
    TimeSliderComponent,
    TextualClockComponent,
    NgIf,
    BarClockComponent,
    DotMatrixClockComponent,
    HexadecimalClockComponent,
    TetrisClockComponent,
],
})
export class ClockComponent implements OnInit, OnDestroy {
  selectedClock: string = 'Analog';
  currentTime: Date = new Date();
  private timeSubscription: Subscription = new Subscription();

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeSubscription = this.timeService.currentTime$.subscribe((time) => {
      this.currentTime = time;
    });
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }

  onClockTypeChanged(clockType: string) {
    this.selectedClock = clockType;
  }

  onTimeChanged(newTime: Date) {
    this.timeService.setTime(newTime);
  }
}
