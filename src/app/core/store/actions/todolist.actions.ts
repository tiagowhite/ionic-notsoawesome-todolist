import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todo.interface';

export enum ETodoListActions {
  AddTodo = '[Todo] Add Todo',
  GetTodos = '[Todos] Get Todos with filter',
  GetTodosSuccess = '[Todos] Get Todos Success',
  GetTodo = '[Todos] Get one Todo',
  SetTodoAsDone = '[Todos] Set Todo as done',
  SetTodoAsNotDone = '[Todos] Set todo as not done',
  RemoveTodo = '[Todos] Remove todo'
}

export class AddTodo implements Action {
  public readonly type = ETodoListActions.AddTodo;
  constructor(public payload: ITodo) { }
}

export class GetTodos implements Action {
  public readonly type = ETodoListActions.GetTodos;
}

export class GetTodosSuccess implements Action {
  public readonly type = ETodoListActions.GetTodosSuccess;
  constructor(public payload: ITodo[]) { }
}

export class GetTodo implements Action {
  public readonly type = ETodoListActions.GetTodo;
}

export class SetTodoAsDone implements Action {
  public readonly type = ETodoListActions.SetTodoAsDone;
}

export class SetTodoAsNotDone implements Action {
  public readonly type = ETodoListActions.SetTodoAsNotDone;
}

export class RemoveTodo implements Action {
  public readonly type = ETodoListActions.RemoveTodo;
}

export type TodolistActions =
  AddTodo
  | GetTodos
  | GetTodosSuccess
  | GetTodo
  | SetTodoAsDone
  | SetTodoAsNotDone
  | RemoveTodo;
