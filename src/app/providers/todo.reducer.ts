import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { getTodoLocalStorage, saveToLocalStorage } from 'src/utils/common';
import { STATUS, Todo } from '../types/todo';
import { actions } from './todo.action';
import { todos } from './todo.state';

// state : default value
// todo : value dispact
export const todoReducer = createReducer(
  todos,
  on(actions.toggleStatus, (state, payload) => {
    const cacheTodo = getTodoLocalStorage();

    let indexTodoMark = cacheTodo.findIndex((t: Todo) => t.id === payload.id);
    var tempTodo = [...cacheTodo];
    if (indexTodoMark !== -1) {
      tempTodo[indexTodoMark] = payload;
    }
    saveToLocalStorage(tempTodo);
    return [...tempTodo];
  }),

  on(actions.addTodoAction, (state, payload) => {
    const cacheTodo = getTodoLocalStorage();
    saveToLocalStorage([payload, ...cacheTodo]);
    return [payload, ...cacheTodo];
  }),

  on(actions.updateTodoAction, (state, payload) => {
    let indexTodoEdit = state.findIndex((t) => t.id === payload.id);
    var tempTodo = [...state];
    if (indexTodoEdit !== -1) {
      tempTodo[indexTodoEdit] = payload;
    }
    saveToLocalStorage(tempTodo);
    return [...tempTodo];
  }),

  on(actions.deleteTodoAction, (state, payload) => {
    const remainTodo = state?.filter((todo) => todo.id !== payload.id);
    saveToLocalStorage(remainTodo);
    return remainTodo;
  }),

  on(actions.filterTodo, (state, payload) => {
    const cacheTodo = getTodoLocalStorage();
    if (payload.valueFilter === STATUS.COMPLETED) {
      const completedList = cacheTodo.filter((todo: Todo) => todo.completed);
      return [...completedList];
    }
    if (payload.valueFilter === STATUS.INCOMPLETE) {
      const inComopleteList = cacheTodo.filter((todo: Todo) => !todo.completed);
      return [...inComopleteList];
    } else {
      return [...cacheTodo];
    }
  })
);

export const todoSelector = createSelector(
  createFeatureSelector('todoList'),
  (state: Todo[]) => state
);
