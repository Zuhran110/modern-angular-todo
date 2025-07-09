import { Component, input, output, signal } from '@angular/core';
import { Todo } from '../../model/todoes.type';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-todoes-item',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './todoes-item.component.html',
  styleUrl: './todoes-item.component.scss'
})
export class TodoesItemComponent {
  todo = input.required<Todo>();
  
  // Output events
  toggle = output<Todo>();
  delete = output<number>();
  edit = output<string>();
  
  // Local state
  isEditing = signal(false);
  editValue = signal('');
  
  onToggle(): void {
    this.toggle.emit(this.todo());
  }
  
  onDelete(): void {
    this.delete.emit(this.todo().id);
  }
  
  startEdit(): void {
    this.editValue.set(this.todo().title);
    this.isEditing.set(true);
  }
  
  saveEdit(): void {
    const newTitle = this.editValue().trim();
    if (newTitle && newTitle !== this.todo().title) {
      this.edit.emit(newTitle);
    }
    this.cancelEdit();
  }
  
  cancelEdit(): void {
    this.isEditing.set(false);
    this.editValue.set('');
  }
  
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.saveEdit();
    } else if (event.key === 'Escape') {
      this.cancelEdit();
    }
  }
}
