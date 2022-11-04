import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from 'src/app/types/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoList: Todo[] = [];
  @Output() markStatus = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit(): void {}

  emitIDToggleStatus = (todo?: Todo) => {
    this.markStatus.emit(todo);
  };
  emitIDDeleteTodo = (id?: number) => {
    this.deleteTodo.emit(id);
  };
  emitIDEditTodo = (todo?: Todo) => {
    this.editTodo.emit(todo);
  };
}
