import {Component} from '@angular/core';
import {TextEnum} from "../../utility/const/TextEnum/TextEnum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home';
  protected readonly TextEnum = TextEnum;
}
