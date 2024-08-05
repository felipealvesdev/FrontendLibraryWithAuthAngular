import { Component } from '@angular/core';
import { InputLoginComponent } from "../../components/input-login/input-login.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputLoginComponent, RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
