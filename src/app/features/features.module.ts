import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WidgetsModule} from "../widgets/widgets.module";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    LoginFormComponent
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
