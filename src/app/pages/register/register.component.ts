import { Component } from '@angular/core';
import { InputLoginComponent } from "../../components/input-login/input-login.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputLoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
