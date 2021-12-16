import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calendarItemComponent } from './calendar-item.component';

describe('calendarItemComponent', () => {
  let component: calendarItemComponent;
  let fixture: ComponentFixture<calendarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ calendarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(calendarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
