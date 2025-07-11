import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoesComponent } from './todoes.component';

describe('TodoesComponent', () => {
  let component: TodoesComponent;
  let fixture: ComponentFixture<TodoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
