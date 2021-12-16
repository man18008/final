import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from '../todo.model';
import { todoService } from '../todo.service';

@Component({
  selector: 'bujo-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class todoDetailComponent implements OnInit {
  /*   @Input() todo: todo; */
  todo: todo;
  constructor(private todoService: todoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.todo = this.todoService.gettodo(params.id));
  }

  onDelete(): void {
    if (this.todo) {
      this.todoService.deletetodo(this.todo);
      this.router.navigate(['/todos']);
    }
  }
}
