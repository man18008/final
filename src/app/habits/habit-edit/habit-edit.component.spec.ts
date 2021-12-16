import { ComponentFixture, TestBed } from '@angular/core/testing';

import { habitEditComponent } from './habit-edit.component';

describe('habitEditComponent', () => {
  let component: habitEditComponent;
  let fixture: ComponentFixture<habitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ habitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(habitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
