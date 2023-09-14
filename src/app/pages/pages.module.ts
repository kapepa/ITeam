import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./Home/home.component";
import { Error404Component } from "./Error404/error404.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    Error404Component,
  ],
  exports: [
    HomeComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
