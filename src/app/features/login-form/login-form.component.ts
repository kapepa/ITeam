import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {BtnColorEnum, BtnTypeEnum, HobbyDto, TechnologyType, TextEnum} from "../../utility";

interface FormGroupProps {
  firstName: FormControl<string | null>,
  lastName: FormControl<string | null>,
  email: FormControl<string | null>,
  dateOfBirth: FormControl<string | null>,
  framework: FormControl<TechnologyType | null>,
  frameworkVersion: FormControl<string | null>,
  hobby: FormControl<HobbyDto[] | null>,
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) { }
  protected readonly BtnTypeEnum = BtnTypeEnum;
  protected readonly TextEnum = TextEnum;
  protected readonly BtnColorEnum = BtnColorEnum

  profileForm: FormGroup<FormGroupProps> = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(4)]],
    lastName: ["", [Validators.required, Validators.minLength(4)]],
    email: ["", [Validators.required, Validators.email]],
    dateOfBirth: ["", [Validators.required]],
    framework: ["" as TechnologyType, [Validators.required]],
    frameworkVersion:  ["", [Validators.required]],
    hobby: [[] as HobbyDto[], [Validators.required]],
  });

  onSubmit () {
    console.log(this.profileForm.valid)
  }

  get isDisabled () {
    return this.profileForm.valid ? BtnColorEnum.Primary : BtnColorEnum.Disabled
  }

  get firstName () {
    return this.profileForm.controls["firstName"] as FormControl;
  }

  get lastName () {
    return this.profileForm.controls["lastName"] as FormControl;
  }

  get email () {
    return this.profileForm.controls["email"] as FormControl;
  }
}
