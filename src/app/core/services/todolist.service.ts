import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodoHttp } from '../models/todo-http.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todoApiUrl = `${environment.apiUrl}todos.json`;

  constructor(private _http: HttpClient) {
    console.log(this.todoApiUrl);
  }

  getTodos(): Observable<ITodoHttp> {
    return this._http.get<ITodoHttp>(this.todoApiUrl);
  }

}
