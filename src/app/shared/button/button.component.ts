import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BtnColorEnum, BtnTypeEnum} from "../../utility";


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  protected readonly BtnColor = BtnColorEnum;
  @Input() href!: string;
  @Input() color: BtnColorEnum = BtnColorEnum.Basic;
  @Input() type: BtnTypeEnum = BtnTypeEnum.Button
}
