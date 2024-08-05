import { Component } from '@angular/core';
import { InputLoginComponent } from "../../components/input-login/input-login.component";
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputLoginComponent, RouterOutlet, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
}
