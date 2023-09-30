import { TodoStore } from './../todo.store';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.store';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule],
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
  // providers: [TodoStore]
})
export class EditTodoComponent {

  public activeModal = inject(NgbActiveModal);

  @Input()
  todo!: Todo;

  @Output()
  onSave = new EventEmitter<Todo>();

  submit(todo: Todo) {
    this.onSave.emit(todo);
    this.activeModal.close();
  }
}
