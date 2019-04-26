import { initialTodolistState, ITodolistState } from '../state/ITodolistState';
import { ETodoListActions, TodolistActions } from '../actions/todolist.actions';


export const todolistReducers = (
  state = initialTodolistState,
  action: TodolistActions
): ITodolistState => {
  switch (action.type) {
    case ETodoListActions.GetTodosSuccess: {
      return {
        ...state,
        todolist: action.payload
      };
    }
    case ETodoListActions.GetTodoSuccess: {
      return {
        ...state,
        selectedTodo: action.payload
      };
    }
    default:
      return state;
  }
};
