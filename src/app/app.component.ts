import { Component, inject } from '@angular/core';
import { Todo, TodoStore } from './todo.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todos$: Observable<Todo[]>

  constructor(todoStore: TodoStore){
    this.todos$ = todoStore.selectTodos;
  }

  ngOnInit() {
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  removeTodo(todo: Todo) {

  }
}
