import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPanelComponent } from './components/events-panel/events-panel.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventsPanelComponent
  ],
  exports: [
    EventsPanelComponent
  ]
})
export class EventsModule { }
