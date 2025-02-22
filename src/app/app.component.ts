import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsPanelComponent } from './events/components/events-panel/events-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventsPanelComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eco-hub';
}
