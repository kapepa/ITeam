import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {FormHobbyProps} from "../../utility";

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.scss']
})
export class HobbyListComponent implements OnInit{
  @Input() control!: FormArray<FormGroup<FormHobbyProps>>

  ngOnInit() {
    console.log(this.hobbyList)
  }

  get hobbyList() {
    return this.control.value
  }
}
