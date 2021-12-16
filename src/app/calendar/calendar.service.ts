import { Injectable, Output, EventEmitter } from '@angular/core';
import { calendar } from './calendar.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class calendarService {
  @Output() calendarSelectedEvent: EventEmitter<calendar> = new EventEmitter<calendar>();
  @Output() calendarChangedEvent: EventEmitter<calendar[]> = new EventEmitter<calendar[]>();
  calendarListChangedEvent = new Subject<calendar[]>();

  maxcalendarId: number;
  calendars: calendar[] = [];

  // https://byui.instructure.com/courses/164460/pages/week-07-assignment-instructions

  getMaxId(): number {
    let maxId = 0;
    for (const calendar of this.calendars) {
      const currentId = parseInt(calendar.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  constructor(private http: HttpClient) {
    this.http.get<calendar[]>('http://localhost:3000/calendars')
      .subscribe((calendarsList: calendar[]) => {
        this.calendars = calendarsList;
        this.maxcalendarId = this.getMaxId();
        this.calendars.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? 1 : 0);
        this.calendarListChangedEvent.next(this.calendars.slice());
      },
        (error: any) => {
          console.log(error);
        });
  }

  addcalendar(newcalendar: calendar): void {
    if (!newcalendar) {
      return;
    }
    newcalendar.id = '';

    // add new calendar to calendars
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<{ message: string, calendar: calendar }>('http://localhost:3000/calendars', newcalendar, { headers: headers })
      .subscribe(
        (responseData) => {
          this.calendars.push(responseData.calendar);
          this.calendarListChangedEvent.next(this.calendars.slice());
        }
      );
    // this.maxcalendarId++;
    // newcalendar.id = this.maxcalendarId.toString();
    // this.calendars.push(newcalendar);
    // this.storecalendars();
    // this.calendarListChangedEvent.next(this.calendars.slice());
  }

  updatecalendar(originalcalendar: calendar, newcalendar: calendar): void {
    if (!originalcalendar || !newcalendar) {
      return;
    }
    const position = this.calendars.indexOf(originalcalendar);
    if (position < 0) {
      return;
    }
    newcalendar.id = originalcalendar.id;
    // update database
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put<any>('http://localhost:3000/calendars/' + originalcalendar.id, newcalendar, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.calendars[position] = newcalendar;
          this.calendarListChangedEvent.next(this.calendars.slice());
        }
      );
    // this.calendars[position] = newcalendar;
    // this.storecalendars();
    // this.calendarListChangedEvent.next(this.calendars.slice());
  }

  getcalendars(): calendar[] {
    return this.calendars.slice();
  }

  getcalendar(id: string): calendar {
    for (const calendar of this.calendars) {
      if (calendar.id === id) {
        return calendar;
      }
    }
    return null;
  }

  deletecalendar(calendar: calendar): void {
    if (!calendar) {
      return;
    }
    const pos = this.calendars.indexOf(calendar);
    if (pos < 0) {
      return;
    }

    this.http.delete<any>('http://localhost:3000/calendars/' + calendar.id)
    .subscribe(
      (response: Response) => {
        this.calendars.splice(pos, 1);
        this.calendarListChangedEvent.next(this.calendars.slice());
      }
    );
    // this.calendars.splice(pos, 1);
    // this.storecalendars();
    // this.calendarListChangedEvent.next(this.calendars.slice());
    // this.calendarChangedEvent.emit(this.calendars.slice());
  }
  // NO LONGER NEEDED. SEE WEEK 11
  // https://byui.instructure.com/courses/164460/pages/w11-assignment-instructions
  // storecalendars() {
  //   const calendarsJson = JSON.stringify(this.calendars);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   }

  //   this.http.put<calendar[]>('http://localhost:3000/calendars', calendarsJson, httpOptions)
  //     .subscribe(() => this.calendarListChangedEvent.next(this.calendars.slice()));
  // }
  //   this.http.put<calendar[]>('https://bujowdd430-default-rtdb.firebaseio.com/calendars.json', calendarsJson, httpOptions)
  //     .subscribe(() => this.calendarListChangedEvent.next(this.calendars.slice()));
  // }
}
