import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { InputComponent } from "./input/input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    InputComponent,
    DatepickerComponent,
  ],
  exports: [
    InputComponent,
    DatepickerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ]
})
export class WidgetsModule { }
