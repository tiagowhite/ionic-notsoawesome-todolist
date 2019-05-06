import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../core/models/todo.interface';
import { ITodoHttp } from '../../core/models/todo-http.interface';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoList: ITodoHttp;

  constructor() {
  }

  ngOnInit() {
  }

  setStyle() {
    /*return {
      'text-decoration': this.item.completed ? 'line-through' : 'none'
    };*/
  }

}
