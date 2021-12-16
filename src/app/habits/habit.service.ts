import { EventEmitter, Injectable, Output } from '@angular/core';
import { habit } from './habit.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Subscription, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @Injectable()

export class habitService {
  @Output() habitChangedEvent: EventEmitter<habit[]> = new EventEmitter<habit[]>();
  habitListChangedEvent = new Subject<habit[]>();

  habits: habit[] = [];
  maxhabitId: number = 0;

  constructor(private http: HttpClient) {
    this.http.get<habit[]>('http://localhost:3000/habits')
      .subscribe((habitsList: habit[]) => {
        this.habits = habitsList;
        this.maxhabitId = this.getMaxId();
        this.habits.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? 1 : 0);
        this.habitListChangedEvent.next(this.habits.slice());
      },
        (error: any) => {
          console.log(error);
        });
  }

  gethabits(): habit[] {
    return this.habits.slice();
  }

  getMaxId(): number {
    let maxId = 0;
    for (const habit of this.habits) {
      // const currentId = parseInt(habit.id);
      let currentId = parseInt(habit.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  gethabit(id: string): habit {
    for (const habit of this.habits) {
      if (habit.id === id) {
        return habit;
      }
    }
    return null;
  }

  addhabit(newhabit: habit) {
    if (!newhabit) {
      return;
    }
    newhabit.id = '';

    // add new habit to habits
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<{ statushabit: string, habit: habit }>('http://localhost:3000/habits', newhabit, { headers: headers })
      .subscribe(
        (responseData) => {
          this.habits.push(responseData.habit);
          this.habitListChangedEvent.next(this.habits.slice());
        }
      );
    // this.maxhabitId++;
    // newhabit.id = this.maxhabitId.toString();
    // this.habits.push(newhabit);
    // this.storehabits();
  }

  updatehabit(originalhabit: habit, newhabit: habit) {
    if (!originalhabit || !newhabit) {
      return;
    }
    const position = this.habits.indexOf(originalhabit);
    if (position < 0) {
      return;
    }
    newhabit.id = originalhabit.id;
    // update database
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put<any>('http://localhost:3000/habits/' + originalhabit.id, newhabit, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.habits[position] = newhabit;
          this.habitListChangedEvent.next(this.habits.slice());
        }
      );
    // this.habits[position] = newhabit;
    // this.storehabits();
  }

  deletehabit(habit: habit) {
    if (!habit) {
      return;
    }
    const position = this.habits.indexOf(habit);
    if (position < 0) {
      return;
    }
    // delete from database
    this.http.delete<any>('http://localhost:3000/habits/' + habit.id)
      .subscribe(
        (response: Response) => {
          this.habits.splice(position, 1);
          this.habitListChangedEvent.next(this.habits.slice());
        }
      );
    // this.habits.splice(position, 1);
    // this.storehabits();
  }


  // storehabits() {
  //   const habitsJson = JSON.stringify(this.habits);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   }
  //   this.http.put<habit[]>('https://bujowdd430-default-rtdb.firebaseio.com/habits.json', habitsJson, httpOptions).subscribe(() => this.habitListChangedEvent.next(this.habits.slice()));

  // }
}
