import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-clock-selector',
  template: `
    <select (change)="onClockChange($event)">
      <option *ngFor="let clock of clocks" [value]="clock">{{ clock }}</option>
    </select>
  `,
  standalone: true,
  imports: [CommonModule], 
})
export class ClockSelectorComponent {
  @Output() clockTypeChanged = new EventEmitter<string>();
  clocks = [
    'Analog',
    'Digital',
    'Binary',
    'Textual',
    'Roman',
    'Bar Graph',
    'Pie Chart',
    'Hexadecimal',
    'Dot Matrix',
    'Tetris',
  ];

  onClockChange(event: any) {
    this.clockTypeChanged.emit(event.target.value);
  }
}