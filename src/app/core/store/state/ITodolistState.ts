import { ITodo } from '../../models/todo.interface';

export interface ITodolistState {
  todolist: Array<ITodo>;
  selectedTodo: ITodo;
  selectedTodoIndex: number;
  filter?: true;
}

export const initialTodolistState: ITodolistState = {
  todolist: [
    {
      id: 'r1',
      task: 'Comprar ovos',
      completed: true,
      created_at: new Date(Date.now()),
      completed_at: new Date(Date.now()),
    }
  ],
  selectedTodo: null,
  selectedTodoIndex: -1,
  filter: true
};

