import { TestBed } from '@angular/core/testing';

import { habitService } from './habit.service';

describe('habitService', () => {
  let service: habitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(habitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
