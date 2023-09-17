import {Component} from '@angular/core';
import {LoginInDto, TextEnum} from "../../utility";
import {AuthService} from "../../entities/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home';
  protected isLoading: boolean = false;
  protected isError: string | undefined;
  protected readonly TextEnum = TextEnum;

  constructor(
    private authService: AuthService,
  ) {
    this.authService.isLoading.subscribe(
      (loading: boolean) => this.isLoading = loading
    );
    this.authService.isError.subscribe(
      (error: string | undefined) => this.isError = error
    )
  }

  public formDate(data: LoginInDto): void {
    this.authService.createUser(data).subscribe((data) => {
      window.alert(JSON.stringify(data))
    });
  }
}
