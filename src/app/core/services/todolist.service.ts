import {Injectable} from '@angular/core';
import { ITodo } from '../models/todo.interface';

@Injectable({
    providedIn: 'root'
})
export class TodolistService {

    private todoList: Array<ITodo> =
        [
            {
                id: 'r1',
                task: 'Comprar ovos',
                completed: true,
                created_at: new Date(Date.now()),
                completed_at: new Date(Date.now()),
            },
            {
                id: 'r2',
                task: 'Terminar desafio',
                completed: false,
                created_at: new Date(Date.now()),
                completed_at: new Date(Date.now()),
            },
            {
                id: 'r3',
                task: 'Pegar kit exoneracao',
                completed: false,
                created_at: new Date(Date.now()),
                completed_at: new Date(Date.now()),
            },
            {
                id: 'r4',
                task: 'Mame foi na padaria',
                completed: true,
                created_at: new Date(Date.now()),
                completed_at: new Date(Date.now()),
            }
        ];

    constructor() {
    }


    getTodos(filter: string): Array<ITodo> {
        switch (filter) {
            case 'all':
                return this.getAllTodos();
            case 'active':
                return this.getActiveTodos();
            case 'completed':
                return this.getActiveTodos(false);
            default:
                return this.getAllTodos();
        }
    }

    getAllTodos(): Array<ITodo> {
        return [...this.todoList];
    }

    getActiveTodos(status: boolean = true): Array<ITodo> {
        return this.todoList.filter(todo => {
            if (status) {
                return todo.completed;
            } else {
                return !todo.completed;
            }
        });
    }


    setTodoAsDone(): boolean {
        return;
    }

    setTodoAsNotDone(): boolean {
        return;
    }

    removeTodo(): boolean {
        return;
    }

    getTodo(todoId): ITodo {
        return {
            ...this.todoList.find(todo => {
                return todo.id === todoId;
            })
        };
    }

}
