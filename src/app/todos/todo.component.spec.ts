import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todoComponent } from './todo.component';

describe('todoComponent', () => {
  let component: todoComponent;
  let fixture: ComponentFixture<todoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ todoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(todoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
