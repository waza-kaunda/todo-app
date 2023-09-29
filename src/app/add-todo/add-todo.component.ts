import { Component, ViewChild, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Todo, TodoStore } from "../todo.store";

@Component({
  selector: "app-add-todo",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
})
export class AddTodoComponent {
  @ViewChild("close") closeBtn;

  fb = inject(FormBuilder);
  todoStore = inject(TodoStore);

  todoForm = this.fb.group({
    id: [{ value: this.generateId(), disabled: true }, Validators.required],
    title: ["", Validators.required],
    description: [""],
    dueDate: [""],
    done: [false],
  });


  onSubmit() {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value);
      const newTodo = this.todoForm.value as unknown as Todo;
      this.todoStore.addTodo(newTodo);
      this.closeBtn.nativeElement.click();
    }
  }

  private generateId() {
    return Math.floor(Math.random() * 1000);
  }

}
