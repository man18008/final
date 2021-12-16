import { Component, OnInit, Input} from '@angular/core';
import { calendar } from '../calendar.model';

@Component({
  selector: 'bujo-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class calendarItemComponent implements OnInit {

  @Input() calendar: calendar;

  constructor() { }

  ngOnInit(): void {
  }

}
