import { Component, OnInit } from '@angular/core';
import { calendar } from './calendar.model';
import { calendarService } from './calendar.service';
@Component({
  selector: 'bujo-calendars',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class calendarsComponent implements OnInit {
  selectedcalendar: calendar;
  constructor(private calendarService: calendarService) { }

  ngOnInit(): void {
    this.calendarService.calendarSelectedEvent.subscribe((calendar) => this.selectedcalendar = calendar);
  }

}
