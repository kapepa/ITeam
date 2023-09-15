import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgIf } from "@angular/common";
import { WidgetsModule } from "./widgets/widgets.module";
import { FeaturesModule } from "./features/features.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    SharedModule,
    WidgetsModule,
    FeaturesModule,
    PagesModule,
    MatFormFieldModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
