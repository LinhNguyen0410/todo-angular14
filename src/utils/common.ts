import { Todo } from 'src/app/types/todo';

export const saveToLocalStorage = (value: Todo[]) => {
  localStorage.setItem('todo-angular', JSON.stringify(value));
};
export const getTodoLocalStorage = () => {
  return JSON.parse(localStorage.getItem('todo-angular') as any) || [];
};
