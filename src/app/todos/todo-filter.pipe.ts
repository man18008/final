import { Pipe, PipeTransform } from '@angular/core';

import { todo } from './todo.model';

@Pipe({
  name: 'todoFilter'
})
export class todoFilterPipe implements PipeTransform {
  // transform() method using the array filter() method
  transform(todo: todo[], term) {
    let filteredtodo: todo[] = [];
    if (term && term.length > 0) {
      filteredtodo = todo.filter(
        (todo: todo) => todo.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (filteredtodo.length < 1) {
      return todo;
    }
    return filteredtodo;
  }

}
