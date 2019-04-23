import { IConfigState, initialConfigState } from './config.state';
import { initialTodolistState, ITodolistState } from './ITodolistState';

export interface IAppState {
  todo: ITodolistState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  todo: initialTodolistState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
