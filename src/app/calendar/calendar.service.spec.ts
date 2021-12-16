import { TestBed } from '@angular/core/testing';

import { calendarService } from './calendar.service';

describe('calendarService', () => {
  let service: calendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(calendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
