import { ComponentFixture, TestBed } from '@angular/core/testing';

import { habitsComponent } from './habit.component';

describe('habitsComponent', () => {
  let component: habitsComponent;
  let fixture: ComponentFixture<habitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ habitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(habitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
