import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { habit } from '../habit.model';
import { habitService } from './../habit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bujo-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})

export class habitListComponent implements OnInit {
  habits: habit[] = [];
  subscription: Subscription;

  constructor(private habitService: habitService) { }

  ngOnInit(): void {
    this.habits = this.habitService.gethabits();
    // this.habitService.habitChangedEvent.subscribe((habits) => this.habits = habits.slice());
    this.subscription = this.habitService.habitListChangedEvent.subscribe((habits: habit[]) => this.habits = habits.slice())
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onAddhabit(habit: habit): void {
    this.habitService.addhabit(habit);
  }

}
