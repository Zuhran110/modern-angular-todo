import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoesItemComponent } from './todoes-item.component';

describe('TodoesItemComponent', () => {
  let component: TodoesItemComponent;
  let fixture: ComponentFixture<TodoesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
