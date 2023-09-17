import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { InputComponent } from "./input/input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SelectComponent } from './select/select.component';
import { MatSelectModule} from "@angular/material/select";
import { HobbyListComponent } from './hobby-list/hobby-list.component';
import { SharedModule } from "../shared/shared.module";
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    HobbyListComponent,
    TimerComponent,
  ],
  exports: [
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    HobbyListComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
  ]
})
export class WidgetsModule { }
