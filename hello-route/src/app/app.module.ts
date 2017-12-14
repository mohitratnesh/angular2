import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataServiceService } from  './data-service.service';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { RealtimeformComponent } from './realtimeform/realtimeform.component';
import { SortNumberPipe } from './app.sortNumberPipe';
import { ModelFormComponent } from './model-form/model-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    TaskManagerComponent,
    RealtimeformComponent,
    SortNumberPipe,
    ModelFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
        },
        {
          path:"modelform",
          component:ModelFormComponent 
        },
        {
          path:"templateform",
          component:TemplateFormComponent 
        }
    ]
  )
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
