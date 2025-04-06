import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPanelComponent } from './components/events-panel/events-panel.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventsPanelComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  exports: [
    EventsPanelComponent
  ]
})
export class EventsModule { }
