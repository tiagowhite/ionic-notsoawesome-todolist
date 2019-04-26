import { IConfigState, initialConfigState } from './config.state';
import { initialTodolistState, ITodolistState } from './ITodolistState';

export interface IAppState {
  todoList: ITodolistState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  todoList: initialTodolistState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
