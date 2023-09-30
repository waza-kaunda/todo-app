import { Component, inject } from '@angular/core';
import { Todo, TodoStore } from './todo.store';
import { Observable, tap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'todo-app';

  todoStore = inject(TodoStore);
  modalService = inject(NgbModal);

  todo: Todo = {id: 0, title: '', done: false };
  today = new Date();

  ngOnInit() {
  }

  markAsDone(todo: Todo) {
    todo.done = !todo.done;
    this.todoStore.updateTodo(todo);
  }

  removeTodo(todo: Todo) {
    this.todoStore.removeTodo(todo.id);
  }

  updateTodo(todo: Todo) {
    this.todoStore.updateTodo(this.todo);
  }

  editTodo(todo: Todo) {
    const modalRef = this.modalService.open(EditTodoComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.componentInstance.onSave.subscribe((todo: Todo) => {
      this.updateTodo.bind(this)(todo);
    });

  }
}
