import {Component, Input, OnInit} from '@angular/core';
import {TodolistService} from '../core/services/todolist.service';
import {ITodo} from '../core/models/todo.interface';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.page.html',
    styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
    todoList: Array<ITodo>;
    todoListFilterControl = 'all';

    constructor(private todoListService: TodolistService) {
    }

    ngOnInit() {
        this.todoList = this.todoListService.getTodos(this.todoListFilterControl);
        console.log(this.todoListFilterControl);
    }

    listSegmentChangeHandler(type: string) {
        this.todoListFilterControl = type['detail'].value;
        this.todoList = this.todoListService.getTodos(this.todoListFilterControl);
    }
}
