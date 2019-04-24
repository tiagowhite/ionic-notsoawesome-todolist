import {Component, Input, OnInit} from '@angular/core';
import {TodolistService} from '../core/services/todolist.service';
import {ITodo} from '../core/models/todo.interface';
import { IAppState } from '../core/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetTodos } from '../core/store/actions/todolist.actions';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.page.html',
    styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
    // todoList$: this._store.pipe(select(selectUserList));
    todoListFilterControl = 'all';

    constructor(private _store: Store<IAppState>) {
    }

    ngOnInit() {
        /*this.todoList = this.todoListService.getTodos(this.todoListFilterControl);*/
        this._store.dispatch(new GetTodos());
        console.log(this.todoListFilterControl);
    }

    listSegmentChangeHandler(type: string) {
        this.todoListFilterControl = type['detail'].value;
        // this._store.dispatch(new GetTodos(true));
    }
}
