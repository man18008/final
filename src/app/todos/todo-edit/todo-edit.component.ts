import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { todo } from '../todo.model';
import { todoService } from '../todo.service';

@Component({
  selector: 'bujo-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class todoEditComponent implements OnInit {
  originaltodo: todo | null = null;
  todo?: todo;
  grouptodos: todo[] = [];
  editMode: boolean;
  id?: string;
  lastAddSuccessful: boolean | null = null;

  constructor(
    private todoService: todoService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      if (!this.id) {
        this.editMode = false;
        return;
      }
      this.originaltodo = this.todoService.gettodo(this.id);
      if (!this.originaltodo) {
        return;
      }
      this.editMode = true;
      this.todo = JSON.parse(JSON.stringify(this.originaltodo));
      if (this.todo?.group && this.todo?.group?.length > 0) {
        this.grouptodos = JSON.parse(JSON.stringify(this.originaltodo.group));
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['todos']);
  }

  onSubmit(f: NgForm): void {
    const value = f.value;
    const newtodo = new todo(value.id, value.name, value.email, value.phone, value.imageUrl, this.grouptodos);
    if (this.editMode) {
      this.todoService.updatetodo(this.originaltodo, newtodo);
    } else {
      this.todoService.addtodo(newtodo);
    }
    this.router.navigate(['todos']);
  }

  // https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions
  isInvalidtodo(newtodo: todo) {
    if (!newtodo) {
      return true;
    }
    if (this.todo && newtodo.id === this.todo.id) {
      return true;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.grouptodos.length; i++) {
      if (newtodo.id === this.grouptodos[i].id) { return true; }
    }
    return false;
  }

  // https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions
  addToGroup($event: any): void {
    const selectedtodo: todo = $event.dragData;
    const invalidGrouptodo = this.isInvalidtodo(selectedtodo);
    if (invalidGrouptodo) {
      this.lastAddSuccessful = false;
      return;
    }
    this.lastAddSuccessful = true;
    this.grouptodos.push(selectedtodo);
  }

  // https://byui.instructure.com/courses/164460/pages/w08-assignment-instructions
  onRemoveItem(index: number): void {
    if (index < 0 || index >= this.grouptodos.length) {
      return;
    }
    this.grouptodos.splice(index, 1);
    this.lastAddSuccessful = null;
  }

}
