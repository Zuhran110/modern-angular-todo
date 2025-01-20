import { TestBed } from '@angular/core/testing';

import { TodoesService } from './todoes.service';

describe('TodoesService', () => {
  let service: TodoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
