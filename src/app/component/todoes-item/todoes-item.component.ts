import { Component, input } from '@angular/core';
import { Todo } from '../../model/todoes.type';

@Component({
  selector: 'app-todoes-item',
  imports: [],
  templateUrl: './todoes-item.component.html',
  styleUrl: './todoes-item.component.scss'
})
export class TodoesItemComponent {
todo=input.required<Todo>();
}
