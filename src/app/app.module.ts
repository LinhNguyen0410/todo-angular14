import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { TodolistComponent } from './components/todolist/todolist';
import { TodoItemComponent } from './components/todo-item/todo-item';
import { SearchInputComponent } from './components/search-input/search-input';
import { FilterTodoComponent } from './components/filter-todo/filter-todo';
import { FormComponent } from './components/form/form';
import { FormWizardModule } from 'angular-wizard-form';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from '../app/providers/todo.reducer';
import { NotFoundComponent } from './components/not-found/not-found';
import { HomePageComponent } from './page/home-page/home-page';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoItemComponent,
    SearchInputComponent,
    FilterTodoComponent,
    FormComponent,
    NotFoundComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormWizardModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todoList: todoReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
