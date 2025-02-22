import { Component } from '@angular/core';
import { EventsCalendarComponent } from "../events-calendar/events-calendar.component";

@Component({
  selector: 'app-events-panel',
  imports: [EventsCalendarComponent],
  templateUrl: './events-panel.component.html',
  styleUrl: './events-panel.component.css'
})
export class EventsPanelComponent {

}
