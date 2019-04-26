import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ITodolistState } from '../state/ITodolistState';

const selectTodos = (state: IAppState) => state.todoList;

export const selectTodoList = createSelector(
  selectTodos,
  (state: ITodolistState) => state.todolist
);

export const selectSelectedTodo = createSelector(
  selectTodos,
  (state: ITodolistState) => state.selectedTodo
);
