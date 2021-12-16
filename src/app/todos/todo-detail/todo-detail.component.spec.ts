import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todoDetailComponent } from './todo-detail.component';

describe('todoDetailComponent', () => {
  let component: todoDetailComponent;
  let fixture: ComponentFixture<todoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ todoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(todoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
