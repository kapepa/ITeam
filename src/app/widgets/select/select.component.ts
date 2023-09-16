import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() control!: FormControl;
  @Input() placeholder!: string;
  @Input() label: string = "";
  @Input() options!: string[] | undefined;
  @Input() disabled: boolean = false;

  firstLetter (word: string): string {
    const first: string = word.charAt(0).toUpperCase();
    const body: string = word.slice(1);
    return first + body
  };
}
