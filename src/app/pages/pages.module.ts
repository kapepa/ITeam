import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./Home/home.component";
import { Error404Component } from "./Error404/error404.component";
import { SharedModule } from "../shared/shared.module";
import { WidgetsModule } from "../widgets/widgets.module";
import { FeaturesModule } from "../features/features.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


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
    SharedModule,
    WidgetsModule,
    FeaturesModule,
    MatProgressSpinnerModule,
  ]
})
export class PagesModule { }
