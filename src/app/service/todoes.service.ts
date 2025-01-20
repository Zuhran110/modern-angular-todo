import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from '../model/todoes.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoesService {
  http = inject(HttpClient);
getTodoesFromApi(){
  const url = 'https://jsonplaceholder.typicode.com/todos/';
  return this.http.get<Array<Todo>>(url);
}
  constructor() { }
}
