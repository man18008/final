import { Component, OnInit, Input } from '@angular/core';
import { habit } from './../habit.model';
import { todo } from 'src/app/todos/todo.model';
import { todoService } from 'src/app/todos/todo.service';

@Component({
  selector: 'bujo-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.css']
})

export class habitItemComponent implements OnInit {
  @Input() habit: habit;

  habitSender: string;

  constructor(private todoService: todoService) { }

  ngOnInit(): void {
    const todo: todo = this.todoService.gettodo(this.habit.sender);
    this.habitSender = todo?.name;
  }

}
