import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist';
import { FormComponent } from './components/form/form';
import { TodoGuard } from './todo.guard';
import { NotFoundComponent } from './components/not-found/not-found';
import { HomePageComponent } from './page/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login-todo',
    component: FormComponent,
  },
  {
    path: 'todo',
    component: TodolistComponent,
    canActivate: [TodoGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
