import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { calendarsComponent } from './calendar/calendar.component';
import { calendarEditComponent } from './calendar/calendar-edit/calendar-edit.component';
import { calendarDetailComponent } from './calendar/calendar-detail/calendar-detail.component';
import { todoListComponent } from './todos/todo-list/todo-list.component';
import { todoComponent } from './todos/todo.component';
import { todoEditComponent } from './todos/todo-edit/todo-edit.component';
import { todoDetailComponent } from './todos/todo-detail/todo-detail.component';

const appRoutes: Routes = [
    {
        path: 'calendar', component: calendarsComponent,
        children: [
            { path: 'new', component: calendarEditComponent },
            { path: ':id', component: calendarDetailComponent },
            { path: ':id/edit', component: calendarEditComponent },
        ]
    },
    { path: 'todo', component: todoListComponent },
    {
        path: 'todo', component: todoComponent,
        children: [
            { path: 'new', component: todoEditComponent },
            { path: ':id', component: todoDetailComponent },
            { path: ':id/edit', component: todoEditComponent },
        ]
    },
    { path: '', redirectTo: '/calendar', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
