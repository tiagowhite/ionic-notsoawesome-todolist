import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { todolistReducers } from './todolist.reducers';
import { configReducers } from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  todoList: todolistReducers,
  config: configReducers
};
