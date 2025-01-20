import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoesService } from '../service/todoes.service';
import { Todo } from '../model/todoes.type';
import { catchError } from 'rxjs';
import { tap } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoesItemComponent } from '../component/todoes-item/todoes-item.component';

@Component({
  selector: 'app-todoes',
  standalone:true,
  imports: [NgIf,TodoesItemComponent],
  templateUrl: './todoes.component.html',
  styleUrl: './todoes.component.scss'
})
export class TodoesComponent implements OnInit{
todoesservice = inject(TodoesService);
todoesItems = signal <Array<Todo>>([]);
ngOnInit(): void {
  this.todoesservice.getTodoesFromApi().pipe(
    catchError((error)=>{
    
      console.error(error);
    throw error;
    }),
    tap((data:Array<Todo>)=>{
      this.todoesItems.set(data);
    })
  ).subscribe();
}
}
