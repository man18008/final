import { Component, OnInit, Input } from '@angular/core';
import { todo } from '../todo.model';

@Component({
  selector: 'bujo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class todoItemComponent implements OnInit {
  @Input() todo: todo;

  constructor() { }

  ngOnInit(): void {
  }

}
