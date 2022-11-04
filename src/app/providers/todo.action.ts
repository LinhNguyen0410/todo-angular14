import { createAction, props } from '@ngrx/store';
import { Todo } from '../types/todo';

const toggleStatus = createAction('[TODO] TOGGLE_STATUS', props<Todo>());
const addTodoAction = createAction('[TODO] ADD_TODO', props<Todo>());
const updateTodoAction = createAction('[TODO] UPDATE_TODO', props<Todo>());
const deleteTodoAction = createAction(
  '[TODO] DELETE_TODO',
  props<{ id: number }>()
);
const filterTodo = createAction(
  '[TODO] FILTER_TODO',
  props<{ valueFilter: string | null }>()
);

export const actions = {
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
  toggleStatus,
  filterTodo,
};
