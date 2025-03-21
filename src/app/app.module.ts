import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ClockSelectorComponent } from './clock-selector/clock-selector.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';
import { AnalogClockComponent } from './clocks/analog-clock/analog-clock.component';
import { DigitalClockComponent } from './clocks/digital-clock/digital-clock.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../../src/environments/enviroment';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ClockSelectorComponent,
    TimeSliderComponent,
    AnalogClockComponent,
    DigitalClockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }