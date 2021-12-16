import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { calendar } from '../calendar.model';
import * as uuid from 'uuid';
import { calendarService } from '../calendar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bujo-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class calendarListComponent implements OnInit {
/*   @Output() selectedcalendarEvent: EventEmitter<calendar> = new EventEmitter<calendar>(); */

  calendars: calendar[] = [];
  subscription: Subscription;

  constructor(private calendarService: calendarService) { }

  ngOnInit(): void {
    this.calendars = this.calendarService.getcalendars();
    this.calendarService.calendarChangedEvent.subscribe((calendars) => this.calendars = calendars.slice())
    this.subscription = this.calendarService.calendarListChangedEvent.subscribe((calendarsList: calendar[]) => this.calendars = calendarsList.slice());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

/*   onSelected(calendar: calendar): void {
    this.calendarService.calendarSelectedEvent.emit(calendar);
  } */

}
