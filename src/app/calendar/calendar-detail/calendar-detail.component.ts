import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { calendar } from '../calendar.model';
import { calendarService } from '../calendar.service';
import { WinRefService } from '../../wind-ref.service';

@Component({
  selector: 'bujo-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class calendarDetailComponent implements OnInit {
  /*   @Input() selectedcalendar: calendar; */

  selectedcalendar: calendar;
  nativeWindow: any;

  constructor(
    private calendarService: calendarService,
    private router: Router,
    private route: ActivatedRoute,
    private windowRefService: WinRefService) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.selectedcalendar = this.calendarService.getcalendar(params.id));
  }

  onView(): void {
    if (this.selectedcalendar.url) {
      this.nativeWindow.open(this.selectedcalendar.url);
    }
  }
  onDelete(): void {
    this.calendarService.deletecalendar(this.selectedcalendar);
    this.router.navigate(['/calendars']);
  }

}
