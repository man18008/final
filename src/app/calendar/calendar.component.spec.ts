import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calendarsComponent } from './calendar.component';

describe('calendarsComponent', () => {
  let component: calendarsComponent;
  let fixture: ComponentFixture<calendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ calendarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(calendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
