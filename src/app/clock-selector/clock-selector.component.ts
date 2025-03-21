// clock-selector.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-clock-selector',
  template: `
    <select (change)="onClockChange($event)">
      <option *ngFor="let clock of clocks" [value]="clock">{{ clock }}</option>
    </select>
  `,
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
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
    'World Clock (Timezone)',
    'Hexadecimal',
    'Dot Matrix',
  ];

  onClockChange(event: any) {
    this.clockTypeChanged.emit(event.target.value);
  }
}