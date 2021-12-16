import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todoListComponent } from './todo-list.component';

describe('todoListComponent', () => {
  let component: todoListComponent;
  let fixture: ComponentFixture<todoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ todoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(todoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
