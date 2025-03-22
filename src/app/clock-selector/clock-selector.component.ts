import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock-selector',
  templateUrl: './clock-selector.component.html', //Use templateUrl
  styleUrls: ['./clock-selector.component.css'], //Link to the CSS file
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
    'Morse Code',
    'Bar Graph',
    'Hexadecimal',
    'Dot Matrix',
    'Tetris',
    'Solar System',
  ];

  onClockChange(event: any) {
    this.clockTypeChanged.emit(event.target.value);
  }
}
