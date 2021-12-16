import { ComponentFixture, TestBed } from '@angular/core/testing';

import { habitItemComponent } from './habit-item.component';

describe('habitItemComponent', () => {
  let component: habitItemComponent;
  let fixture: ComponentFixture<habitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ habitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(habitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
