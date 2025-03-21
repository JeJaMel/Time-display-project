import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="app-container">
        <h1>Time Display App</h1>
        <router-outlet></router-outlet>
    </div>
    `,
    imports: [RouterOutlet]
})
export class AppComponent {}