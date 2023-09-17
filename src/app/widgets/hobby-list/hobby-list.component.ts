import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BtnColorEnum, FormHobbyProps} from "../../utility";
import {HobbyDuration} from "../../utility/types/HobbyDuration";

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.scss']
})
export class HobbyListComponent {
  constructor(private fb: FormBuilder) { };
  protected readonly BtnColorEnum = BtnColorEnum;
  @Input() formHobby!: FormArray<FormGroup<FormHobbyProps>>;
  @Output() addHobby: EventEmitter<unknown> = new EventEmitter<unknown>();
  @Output() deleteHobby: EventEmitter<number> = new EventEmitter<number>();
  selectDuration: HobbyDuration[] = ["1 month", "2 month" ,"3 month" ,"4 month", "6 month", "more..."];

  onAddNewHobby(): void {
    this.addHobby.emit();
  }

  onDeleteHobby(index: number): void {
    this.deleteHobby.emit(index);
  }

  get hobbyList() {
    const hobby: FormGroup<FormHobbyProps>[] = this.formHobby.controls;
    return hobby;
  }

  controlsName (form: FormGroup<FormHobbyProps>): FormControl {
    return form.controls["name"];
  }

  controlsDuration (form: FormGroup<FormHobbyProps>): FormControl {
    return form.controls["duration"];
  }

  isDisabled (form: FormGroup<FormHobbyProps>): boolean {
    return form.controls["name"].valid;
  }

}
