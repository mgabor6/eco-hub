import { Component } from '@angular/core';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-events-calendar',
  imports: [CalendarModule],
  templateUrl: './events-calendar.component.html',
  styleUrl: './events-calendar.component.css'
})
export class EventsCalendarComponent {
  viewDate = new Date()
  events = []
}
