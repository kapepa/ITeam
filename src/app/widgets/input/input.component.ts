import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  @Input() label: string = ""

  get getText () {
    return this.label.toLowerCase();
  }
}
