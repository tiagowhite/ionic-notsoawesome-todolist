import { initialTodolistState, ITodolistState } from '../state/ITodolistState';
import { ETodoListActions, TodolistActions } from '../actions/todolist.actions';

export const todolistReducers = (
  state = initialTodolistState,
  action: TodolistActions
): ITodolistState => {
  switch (action.type) {
    case ETodoListActions.AddTodo: {
      return {
        ...state,
        todolist: [...state.todolist, action.payload]
      };
    }

    case ETodoListActions.GetTodos: {
      return {
        ...state,
        todolist: [...state.todolist]
      };
    }

    case ETodoListActions.GetTodosSuccess: {
      return {
        ...state
      };
    }
  }
};
