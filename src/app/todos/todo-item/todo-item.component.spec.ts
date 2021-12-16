import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todoItemComponent } from './todo-item.component';

describe('todoItemComponent', () => {
  let component: todoItemComponent;
  let fixture: ComponentFixture<todoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ todoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(todoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
