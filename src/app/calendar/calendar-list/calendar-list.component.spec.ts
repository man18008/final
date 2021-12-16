import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calendarListComponent } from './calendar-list.component';

describe('calendarListComponent', () => {
  let component: calendarListComponent;
  let fixture: ComponentFixture<calendarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ calendarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(calendarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
