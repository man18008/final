import { ComponentFixture, TestBed } from '@angular/core/testing';

import { habitListComponent } from './habit-list.component';

describe('habitListComponent', () => {
  let component: habitListComponent;
  let fixture: ComponentFixture<habitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ habitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(habitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
