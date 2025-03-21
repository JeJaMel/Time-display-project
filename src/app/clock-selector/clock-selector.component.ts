import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-selector',
  template: `
    <select (change)="onClockChange($event)">
      <option *ngFor="let clock of clocks" [value]="clock">{{ clock }}</option>
    </select>
  `,
})
export class ClockSelectorComponent {
  clocks = ['Analog', 'Digital', 'Binary'];

  onClockChange(event: any) {
    console.log('Selected clock:', event.target.value);
  }
}