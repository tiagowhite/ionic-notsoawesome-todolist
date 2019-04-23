import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../core/models/todo.interface';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: ITodo;

  constructor() {
  }

  ngOnInit() {
  }

  setStyle() {
    return {
      'text-decoration': this.item.completed ? 'line-through' : 'none'
    };
  }

}
