import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { TodoesService } from '../service/todoes.service';
import { Todo } from '../model/todoes.type';
import { catchError, finalize } from 'rxjs';
import { tap } from 'rxjs';
import { NgIf, NgClass } from '@angular/common';
import { TodoesItemComponent } from '../component/todoes-item/todoes-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoes',
  standalone: true,
  imports: [NgIf, NgClass, TodoesItemComponent, FormsModule],
  templateUrl: './todoes.component.html',
  styleUrl: './todoes.component.scss'
})
export class TodoesComponent implements OnInit {
  todoesService = inject(TodoesService);
  
  // Signals
  todoesItems = signal<Array<Todo>>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  searchTerm = signal('');
  filterStatus = signal<'all' | 'completed' | 'pending'>('all');
  
  // Computed values
  filteredTodos = computed(() => {
    const todos = this.todoesItems();
    const search = this.searchTerm().toLowerCase();
    const filter = this.filterStatus();
    
    return todos.filter(todo => {
      const matchesSearch = todo.title.toLowerCase().includes(search);
      const matchesFilter = filter === 'all' || 
        (filter === 'completed' && todo.completed) ||
        (filter === 'pending' && !todo.completed);
      
      return matchesSearch && matchesFilter;
    });
  });
  
  completedCount = computed(() => 
    this.todoesItems().filter(todo => todo.completed).length
  );
  
  pendingCount = computed(() => 
    this.todoesItems().filter(todo => !todo.completed).length
  );

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.loading.set(true);
    this.error.set(null);
    
    this.todoesService.getTodoesFromApi().pipe(
      tap((data: Array<Todo>) => {
        this.todoesItems.set(data);
        this.saveToLocalStorage(data);
      }),
      catchError((error) => {
        console.error('Error loading todos:', error);
        this.error.set('Failed to load todos. Please try again later.');
        
        // Try to load from local storage as fallback
        const savedTodos = this.loadFromLocalStorage();
        if (savedTodos.length > 0) {
          this.todoesItems.set(savedTodos);
          this.error.set('Loaded from cache. Some data may be outdated.');
        }
        
        throw error;
      }),
      finalize(() => this.loading.set(false))
    ).subscribe();
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  onFilterChange(status: 'all' | 'completed' | 'pending'): void {
    this.filterStatus.set(status);
  }

  onTodoToggle(todo: Todo): void {
    const updatedTodos = this.todoesItems().map(t => 
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    this.todoesItems.set(updatedTodos);
    this.saveToLocalStorage(updatedTodos);
  }

  onTodoDelete(todoId: number): void {
    const updatedTodos = this.todoesItems().filter(t => t.id !== todoId);
    this.todoesItems.set(updatedTodos);
    this.saveToLocalStorage(updatedTodos);
  }

  onTodoEdit(todo: Todo, newTitle: string): void {
    if (newTitle.trim()) {
      const updatedTodos = this.todoesItems().map(t => 
        t.id === todo.id ? { ...t, title: newTitle.trim() } : t
      );
      this.todoesItems.set(updatedTodos);
      this.saveToLocalStorage(updatedTodos);
    }
  }

  addNewTodo(title: string): void {
    if (title.trim()) {
      const newTodo: Todo = {
        id: Date.now(), // Simple ID generation
        userId: 1,
        title: title.trim(),
        completed: false
      };
      
      const updatedTodos = [newTodo, ...this.todoesItems()];
      this.todoesItems.set(updatedTodos);
      this.saveToLocalStorage(updatedTodos);
    }
  }

  private saveToLocalStorage(todos: Todo[]): void {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }

  private loadFromLocalStorage(): Todo[] {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return [];
    }
  }

  retryLoad(): void {
    this.loadTodos();
  }
}
