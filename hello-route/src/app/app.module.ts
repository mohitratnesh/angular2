import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { RealtimeformComponent } from './realtimeform/realtimeform.component';
import { SortNumberPipe } from './app.sortNumberPipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    TaskManagerComponent,
    RealtimeformComponent,
    SortNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path:"myproductpath",
          component:ProductComponent
        },
        {
          path:"mycategorypath",
          component:CategoryComponent
        },
        {
          path:"addtask",
          component:TaskManagerComponent 
        }
    ]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
