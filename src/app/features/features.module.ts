import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WidgetsModule} from "../widgets/widgets.module";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MAT_DATE_LOCALE} from "@angular/material/core";

@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  declarations: [
    LoginFormComponent,

  ],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule,
    SharedModule,
    MatCardModule
  ]
})
export class FeaturesModule { }
