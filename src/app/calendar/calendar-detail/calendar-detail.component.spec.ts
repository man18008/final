import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calendarDetailComponent } from './calendar-detail.component';

describe('calendarDetailComponent', () => {
  let component: calendarDetailComponent;
  let fixture: ComponentFixture<calendarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ calendarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(calendarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
