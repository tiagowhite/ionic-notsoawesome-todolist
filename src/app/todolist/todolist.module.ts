import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodolistPage } from './todolist.page';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoControlsComponent } from './todo-controls/todo-controls.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: TodolistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodolistPage, TodoItemComponent, TodoControlsComponent]
})
export class TodolistPageModule {
}
