import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todoService } from '../todo.service';
import { todo } from './../todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bujo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class todoListComponent implements OnInit {
  /*   @Output() selectedtodoEvent = new EventEmitter<todo>(); */
  todo: todo[] = [];
  subscription: Subscription;
  term: string;
  /*   todo: todo[] = [
      new todo('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', null),
      new todo('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', null),
    ];

    onSelected(todo: todo): void {
      this.todoService.todoelectedEvent.emit(todo);
    } */

  search(value: string) {

    this.term = value;

  }

  constructor(private todoService: todoService) { }

  ngOnInit(): void {
    this.todo = this.todoService.gettodo();
    this.todoService.todoChangedEvent.subscribe((todo) => this.todo = todo.slice());
    this.subscription = this.todoService.todoListChangedEvent.subscribe((todoList: todo[]) => this.todo = todoList.slice());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
