import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { calendar } from '../calendar.model';
import { calendarService } from '../calendar.service';

@Component({
  selector: 'bujo-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.css']
})

export class calendarEditComponent implements OnInit {
  originalcalendar: calendar | null = null;
  calendar?: calendar;
  editMode = false;
  id: string;

  // https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions

  constructor(
    private calendarService: calendarService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  // PseudoCode Here: https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      if (!this.id) {
        this.editMode = false;
        return;
      }
      this.originalcalendar = this.calendarService.getcalendar(this.id);
      if (!this.originalcalendar) {
        return;
      }
      this.editMode = true;
      this.calendar = JSON.parse(JSON.stringify(this.originalcalendar));
    });
  }

    // PseudoCode Here: https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions
  onSubmit(f: NgForm): void {
    const value = f.value;
    const newcalendar = new calendar(value.id, value.name, value.description, value.url, []);
    if (this.editMode) {
      this.calendarService.updatecalendar(this.originalcalendar, newcalendar);
    } else {
      this.calendarService.addcalendar(newcalendar);
    }
    this.router.navigate(['calendars']);
  }

    // PseudoCode Here: https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions
  onCancel(): void {
    this.router.navigate(['calendars']);
  }

}
