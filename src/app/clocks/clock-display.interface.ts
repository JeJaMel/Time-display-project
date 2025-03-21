import { InjectionToken } from '@angular/core';

export interface ClockDisplay {
  updateTime(time: Date): void;
}
//Used to get the components
export const CLOCK_DISPLAY = new InjectionToken<ClockDisplay>('ClockDisplay');