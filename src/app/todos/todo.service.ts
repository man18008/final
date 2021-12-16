import { Injectable, EventEmitter, Output} from '@angular/core';
import { todo } from './todo.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class todoService {
  @Output() todoSelectedEvent: EventEmitter<todo> = new EventEmitter<todo>();
  @Output() todoChangedEvent: EventEmitter<todo[]> = new EventEmitter<todo[]>();
  todoListChangedEvent = new Subject<todo[]>();
  maxtodoId: number;
  todo: todo[] = [];
  // todoChangedEvent: any;

  constructor(private http: HttpClient) {
    this.http.get<todo[]>('http://localhost:3000/todo')
      .subscribe((todoList: todo[]) => {
        this.todo = todoList;
        this.maxtodoId = this.getMaxId();
        this.todo.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? 1 : 0);
        this.todoListChangedEvent.next(this.todo.slice());
      },
        (error: any) => {
          console.log(error);
        });
  }

  getMaxId(): number {
    let maxId = 0;
    for (const todo of this.todo) {
      const currentId = parseInt(todo.id, 10);
      if (currentId > maxId) { maxId = currentId; }
    }
    return maxId;
  }

  gettodo(): todo[] {
    return this.todo.slice();
  }

  gettodos(id: string): todo {
    for (const todo of this.todo) {
      if (todo.id === id) {
        return todo;
      }
    }
    return null;
  }

  addtodo(newtodo: todo): void {
    if (!newtodo) {
      return;
    }
    newtodo.id = '';

    // add new todo to todo
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<{ message: string, todo: todo }>('http://localhost:3000/todo', newtodo, { headers: headers })
      .subscribe(
        (responseData) => {
          this.todo.push(responseData.todo);
          this.todoListChangedEvent.next(this.todo.slice());
        }
      );
  }

  updatetodo(originaltodo: todo, newtodo: todo): void {
    if (!originaltodo || !newtodo) {
      return;
    }
    const position = this.todo.indexOf(originaltodo);
    if (position < 0) {
      return;
    }
    newtodo.id = originaltodo.id;
// update database
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put<any>('http://localhost:3000/todo/' + originaltodo.id, newtodo, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.todo[position] = newtodo;
          this.todoListChangedEvent.next(this.todo.slice());
        }
      );

  }

  deletetodo(todo: todo): void {
    if (!todo) { return; }
    const pos = this.todo.indexOf(todo);
    if (pos < 0) { return; }

    // delete from database
    this.http.delete<any>('http://localhost:3000/todo/' + todo.id)
      .subscribe(
        (response: Response) => {
          this.todo.splice(pos, 1);
          this.todoListChangedEvent.next(this.todo.slice());
        }
      );
  }

}
