import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    ButtonComponent,
  ],
  exports: [
    ContainerComponent,
    TextComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
