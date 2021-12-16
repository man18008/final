import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todoEditComponent } from './todo-edit.component';

describe('todoEditComponent', () => {
  let component: todoEditComponent;
  let fixture: ComponentFixture<todoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ todoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(todoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
