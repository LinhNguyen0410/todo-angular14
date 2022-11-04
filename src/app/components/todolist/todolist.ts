import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/providers/todo.action';
import { todoSelector } from 'src/app/providers/todo.reducer';
import { Mode, StatusFilter, Todo } from 'src/app/types/todo';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.html',
  styleUrls: ['./todolist.css'],
})
export class TodolistComponent implements OnInit {
  public todos: Todo[] = [];
  public todoFilterStatus: string[] = StatusFilter;
  public valueWillEdit?: string = '';
  public mode?: Mode = {
    modeName: 'Add',
    modeBackground: 'blue',
  };
  public todoWillEdit?: Todo;
  public statusParams?: string | null;

  constructor(
    private store: Store,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTodo();
    this.getQueryParams();
  }

  handleLogout = () => {
    this.route.navigateByUrl('/login-todo');
    localStorage.removeItem('isAdmin');
  };
  handleBack = () => {
    this.route.navigateByUrl('/');
    localStorage.removeItem('isAdmin');
  };
  getQueryParams = () => {
    const filterParams = this.router.snapshot.queryParamMap.get('status');
    this.store.dispatch(actions.filterTodo({ valueFilter: filterParams }));
    this.statusParams = filterParams;
  };
  loadTodo = () => {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  };
  handleToggleStatus = (todo?: Todo) => {
    const newTodo: Todo = {
      ...todo,
      completed: !todo?.completed,
    };
    this.store.dispatch(actions.toggleStatus(newTodo));
    this.getQueryParams();
  };

  handleAddNewTodo = (inputValue: string) => {
    if (inputValue === '' || !inputValue?.trim()) return;
    this.statusParams = 'all';
    this.route.navigateByUrl('todo');
    if (this.mode?.modeName === 'Add') {
      const newTodo: Todo = {
        id: uuidv4(),
        content: inputValue,
        completed: false,
      };
      this.store.dispatch(actions.addTodoAction(newTodo));
      this.loadTodo();
    } else {
      if (this.todoWillEdit !== undefined) {
        this.todoWillEdit.content = inputValue;
        this.store.dispatch(actions.updateTodoAction(this.todoWillEdit));
      }
      if (this.mode !== undefined) {
        this.mode.modeName = 'Add';
        this.mode.modeBackground = 'blue';
      }
    }
  };

  handleDeleteTodo = (id: number) => {
    this.store.dispatch(actions.deleteTodoAction({ id }));
  };

  handleEditTodo = (todo: Todo) => {
    // switch mode
    if (this.mode !== undefined) {
      this.mode.modeName = 'Edit';
      this.mode.modeBackground = 'red';
    }
    // bind value to INPUT
    const todoNeedEdit = this.todos?.find((item) => {
      return item.id === todo.id;
    });
    this.valueWillEdit = todo?.content;
    this.todoWillEdit = { ...todoNeedEdit };
  };

  handleFilterTodo = (valueFilter: string) => {
    this.statusParams = valueFilter;
    this.store.dispatch(actions.filterTodo({ valueFilter }));
    switch (valueFilter) {
      case 'completed':
        this.route.navigate(['todo'], {
          queryParams: { status: 'completed' },
        });
        break;
      case 'incomplete':
        this.route.navigate(['todo'], {
          queryParams: { status: 'incomplete' },
        });
        break;
      default:
        this.route.navigateByUrl('todo');
        break;
    }
  };
}
