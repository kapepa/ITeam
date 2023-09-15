import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

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
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
