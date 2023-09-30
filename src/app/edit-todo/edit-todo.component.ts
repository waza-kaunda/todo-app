import { TodoStore } from './../todo.store';
import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit, inject } from '@angular/core';
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
export class EditTodoComponent implements OnInit {

  @Input()
  todo!: Todo;
  // todoStore = inject(TodoStore);

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.todo);
  }
}
