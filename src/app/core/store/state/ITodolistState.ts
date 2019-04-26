import { ITodo } from '../../models/todo.interface';

export interface ITodolistState {
  todolist: ITodo[];
  selectedTodo: ITodo;
  selectedTodoIndex: number;
  filter?: true;
}

export const initialTodolistState: ITodolistState = {
  todolist: null,
  selectedTodo: null,
  selectedTodoIndex: -1,
  filter: true
};

