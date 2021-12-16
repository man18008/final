import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calendarEditComponent } from './calendar-edit.component';

describe('calendarEditComponent', () => {
  let component: calendarEditComponent;
  let fixture: ComponentFixture<calendarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ calendarEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(calendarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
