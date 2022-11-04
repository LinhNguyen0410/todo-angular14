import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist';

export const todoRoutes: Routes = [
  {
    path: 'todo',
    component: TodolistComponent,
    children: [
      {
        path: 'completed',
        component: TodolistComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
