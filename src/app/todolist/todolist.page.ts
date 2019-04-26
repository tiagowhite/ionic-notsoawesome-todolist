import { Component, OnInit } from '@angular/core';
import { IAppState } from '../core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetTodos } from '../core/store/actions/todolist.actions';
import { selectTodoList } from '../core/store/selectors/todolist.selectors';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
  todolist$ = this._store.pipe(select(selectTodoList));

  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit() {
    this._store.dispatch(new GetTodos());
  }

  listSegmentChangeHandler(type: string) {
    // this.todoListFilterControl = type['detail'].value;
    // this._store.dispatch(new GetTodos(true));
  }
}
