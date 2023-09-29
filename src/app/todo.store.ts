import { ComponentStore } from "@ngrx/component-store";

export interface Todo {
  id: number;
  title: string;
  description?: string;
  dueDate?: Date;
  done: boolean;
}

const TodoState: Todo[] = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Walk the dog', done: false },
  { id: 3, title: 'Do laundry', done: false }
];

export class TodoStore extends ComponentStore<Todo[]> {

  constructor() {
    super(TodoState);
  }

  readonly addTodo = this.updater((state, todo: Todo) => [...state, todo]);

  readonly removeTodo = this.updater((state, id: number) => state.filter(todo => todo.id !== id));
  readonly toggleTodo = this.updater((state, id: number) => state.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  readonly updateTodo = this.updater((state, todo: Todo) => state.map(t => t.id === todo.id ? todo : t));

  readonly selectTodos = this.select(state => state);
  readonly selectDoneTodos = this.select(state => state.filter(todo => todo.done));
  readonly selectNotDoneTodos = this.select(state => state.filter(todo => !todo.done));
}


