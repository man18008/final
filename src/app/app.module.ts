import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { todoComponent } from './todos/todo.component';
import { todoListComponent } from './todos/todo-list/todo-list.component';
import { todoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { todoItemComponent } from './todos/todo-item/todo-item.component';
import { todoEditComponent } from './todos/todo-edit/todo-edit.component';
import { calendarsComponent } from './calendar/calendar.component';
import { calendarListComponent } from './calendar/calendar-list/calendar-list.component';
import { calendarItemComponent } from './calendar/calendar-item/calendar-item.component';
import { calendarDetailComponent } from './calendar/calendar-detail/calendar-detail.component';
import { calendarEditComponent } from './calendar/calendar-edit/calendar-edit.component';
import { habitsComponent } from './habits/habit.component';
import { habitItemComponent } from './habits/habit-item/habit-item.component';
import { habitEditComponent } from './habits/habit-edit/habit-edit.component';
import { habitListComponent } from './habits/habit-list/habit-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { DndModule } from 'ng2-dnd';
import { todoFilterPipe } from './todos/todo-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    todoComponent,
    todoListComponent,
    todoDetailComponent,
    todoItemComponent,
    calendarsComponent,
    calendarListComponent,
    calendarItemComponent,
    calendarDetailComponent,
    todoComponent,
    todoItemComponent,
    todoEditComponent,
    todoListComponent,
    DropdownDirective,
    calendarEditComponent,
    todoEditComponent,
    todoFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
