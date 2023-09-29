import { Component, inject } from '@angular/core';
import { Todo, TodoStore } from './todo.store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoStore]
})
export class AppComponent {

  title = 'todo-app';

  todos$: Observable<Todo[]>;

  todo: Todo = {id: 0, title: '', done: false };

  constructor(private todoStore: TodoStore){
    this.todos$ = todoStore.selectTodos.pipe(tap(todos => this.todo.id = todos.length));
  }

  ngOnInit() {
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.todoStore.updateTodo(todo);
  }

  removeTodo(todo: Todo) {
    this.todoStore.removeTodo(todo.id);
  }

  addTodo() {
    this.todoStore.addTodo(this.todo);
    this.todo = {id: this.todo.id + 1, title: '', done: false };
  }
}
