import {FormControl} from "@angular/forms";

export interface FormHobbyProps {
  name: FormControl<string | null>,
  duration: FormControl<string | null>,
}
