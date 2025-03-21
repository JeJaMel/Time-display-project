import { Component } from '@angular/core';
import { ClockSelectorComponent } from '../../clock-selector/clock-selector.component';

@Component({
  selector: 'app-clock',
  standalone: true,
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  imports: [ClockSelectorComponent]
})
export class ClockComponent {
}