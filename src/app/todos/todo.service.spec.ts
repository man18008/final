import { TestBed } from '@angular/core/testing';

import { todoService } from './todo.service';

describe('todoervice', () => {
  let service: todoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(todoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
