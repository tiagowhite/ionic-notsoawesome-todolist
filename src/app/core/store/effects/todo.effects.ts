import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ETodoListActions, GetTodos, GetTodosSuccess } from '../actions/todolist.actions';
import { TodolistService } from '../../services/todolist.service';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { ITodoHttp } from '../../models/todo-http.interface';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class TodoEffects {

  constructor(
    private _todoListService: TodolistService,
    private _action$: Actions,
    private _store: Store<IAppState>
  ) {}

  @Effect()
  getTodos$ = this._action$.pipe(
    ofType<GetTodos>(ETodoListActions.GetTodos),
    switchMap(() => this._todoListService.getTodos()),
    switchMap((todoHttp: ITodoHttp) => of(new GetTodosSuccess(todoHttp.todos)))
  );
}
