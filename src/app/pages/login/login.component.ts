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
  loginValue: string = '';
  passwordValue: string = '';
  resetInputs: boolean = false;

  onLoginValueChange(value: string) {
    this.loginValue = value;
  }

  onPasswordValueChange(value: string) {
    this.passwordValue = value;
  }

  onSubmit() {
    console.log(`Login: ${this.loginValue}`);
    console.log(`Password ${this.passwordValue}`);
    this.resetInputs = true;
    setTimeout(() => this.resetInputs = false, 0);
  }
}
