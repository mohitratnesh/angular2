import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Component } from '@angular/core/src/metadata/directives';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path:"myproductpath",
          component:ProductComponent
        },
        {
          path:"mycategorypath",
          component:CategoryComponent
        }
    ]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
