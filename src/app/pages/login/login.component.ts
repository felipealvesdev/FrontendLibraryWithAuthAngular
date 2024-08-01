import { Component } from '@angular/core';
import { InputLoginComponent } from "../../components/input-login/input-login.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
