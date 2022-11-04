import { getTodoLocalStorage } from 'src/utils/common';
import { Todo } from '../types/todo';

export const todos: Todo[] = getTodoLocalStorage();
