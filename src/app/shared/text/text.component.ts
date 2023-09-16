import {Component, Input} from '@angular/core';
import {TextEnum} from "../../utility";


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent{
  @Input() type: TextEnum = TextEnum.P;
  @Input() className!: string;
  protected readonly TextEnum = TextEnum;

  get getClassName () {
    return !!this.className ? this.className : ""
  }
}
