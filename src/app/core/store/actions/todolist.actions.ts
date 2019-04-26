import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todo.interface';

export enum ETodoListActions {
  GetTodos = '[Todos] Get Todos with filter',
  GetTodosSuccess = '[Todos] Get Todos Success',
  GetTodo = '[Todos] Get one Todo',
  GetTodoSuccess = '[Todo] Get todo success'
}

export class GetTodos implements Action {
  public readonly type = ETodoListActions.GetTodos;
}

export class GetTodosSuccess implements Action {
  public readonly type = ETodoListActions.GetTodosSuccess;
  constructor(public payload: ITodo[]) {}
}

export class GetTodo implements Action {
  public readonly type = ETodoListActions.GetTodo;
}

export class GetTodoSuccess {
  public readonly type = ETodoListActions.GetTodoSuccess;
  constructor(public payload: ITodo) {}
}




export type TodolistActions = GetTodos | GetTodosSuccess | GetTodo | GetTodoSuccess;

