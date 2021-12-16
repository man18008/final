import { todoService } from './todo.service';
import { Component, Inject, OnInit } from '@angular/core';
import { todo } from './todo.model';

@Component({
  selector: 'bujo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class todoComponent implements OnInit {
  selectedtodo: todo;
  constructor(private todoService: todoService) { }

  ngOnInit(): void {
    this.todoService.todoSelectedEvent.subscribe((todo) => this.selectedtodo = todo);
  }

}
