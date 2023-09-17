import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  BtnColorEnum,
  BtnTypeEnum,
  FormHobbyProps,
  HobbyDto, LoginInDto,
  TechnologyType,
  TextEnum,
} from "../../utility";


interface FormGroupProps {
  firstName: FormControl<string | null>,
  lastName: FormControl<string | null>,
  email: FormControl<string | null>,
  dateOfBirth: FormControl<string | null>,
  framework: FormControl<TechnologyType | null>,
  frameworkVersion: FormControl<string | null>,
  hobby: FormArray<FormGroup<FormHobbyProps>>,
};

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) { }
  protected readonly BtnTypeEnum = BtnTypeEnum;
  protected readonly TextEnum = TextEnum;
  protected readonly BtnColorEnum = BtnColorEnum;
  @Input() isLoading: boolean = false;
  @Output() profileData: EventEmitter<LoginInDto> = new EventEmitter<LoginInDto>();

  frameworks: {[key in TechnologyType]: string[]} = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  }

  profileForm: FormGroup<FormGroupProps> = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(4)]],
    lastName: ["", [Validators.required, Validators.minLength(4)]],
    email: ["", [Validators.required, Validators.email]],
    dateOfBirth: ["", [Validators.required]],
    framework: ["" as TechnologyType, [Validators.required]],
    frameworkVersion:  ["", [Validators.required]],
    hobby: this.fb.array(this.loadCarsArray([{ name: "", duration: ""}]))
  });

  onSubmit () {
    const { valid, value } = this.profileForm

    if(valid) {
      const dateOfBirth: string = new Date(value.dateOfBirth!).toLocaleDateString();
      this.profileData.emit({...value, dateOfBirth} as LoginInDto)
      this.profileForm.reset();
    }
  }

  loadCarsArray(hobby: HobbyDto[]): FormGroup<FormHobbyProps>[] {
    return hobby.map((hobby: HobbyDto) => this.createHobbyFormGroup(hobby));
  }

  createHobbyFormGroup(hobby: HobbyDto): FormGroup<FormHobbyProps> {
    return this.fb.group({
      name: [hobby.name, [Validators.required]],
      duration: [hobby.duration, [Validators.required]],
    });
  }

  addHobby (): void {
    const formHobby: FormGroup<FormHobbyProps> = this.createHobbyFormGroup({ name: "", duration: ""});
    const hobby: FormArray<FormGroup<FormHobbyProps>>  = this.hobby;
    hobby.push(formHobby);
  }

  deleteHobby (index: number): void {
    const hobby: FormArray<FormGroup<FormHobbyProps>>  = this.hobby;
    if(hobby.value.length !== 1) hobby.removeAt(index);
  }

  get isDisabled () {
    return this.profileForm.valid || this.isLoading ? BtnColorEnum.Primary : BtnColorEnum.Disabled
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

  get datepicker () {
    return this.profileForm.controls["dateOfBirth"] as FormControl;
  }

  get framework () {
    return this.profileForm.controls["framework"] as FormControl;
  }

  get optionsFramework () {
    return Object.keys(this.frameworks);
  }

  get version () {
    const controls: FormControl = this.profileForm.controls["frameworkVersion"];
    return controls;
  }

  get optionsVersion () {
    const technology: TechnologyType = this.framework.value;
    return !!technology ? this.frameworks[technology] : undefined;
  }

  get hobby() {
    const hobby: FormArray<FormGroup<FormHobbyProps>> = this.profileForm.controls['hobby']
    return hobby;
  }
}
