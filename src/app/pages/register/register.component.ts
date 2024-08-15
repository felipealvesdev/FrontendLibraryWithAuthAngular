import { Component } from '@angular/core';
import { InputLoginComponent } from "../../components/input-login/input-login.component";
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputLoginComponent, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loginValue: string = '';
  passwordValue: string = '';
  userTypeValue: string = "ADMIN" || "USER";
  resetInputs: boolean = false;


  constructor(private http: HttpClient) {}

  onLoginValueChange(value: string) {
    this.loginValue = value;
  }

  onPasswordValueChange(value: string) {
    this.passwordValue = value;
  }

  onUserTypeValueChange(value: string) {
    this.userTypeValue = value.toUpperCase();
  }

  onSubmit() {
    console.log(`Login: ${this.loginValue}`);
    console.log(`Password: ${this.passwordValue}`)
    console.log(`Role: ${this.userTypeValue}`)

    const loginData = {
      login: this.loginValue,
      password: this.passwordValue,
      role: this.userTypeValue,
    };

    this.http.post(`${environment.apiUrl}/auth/register`, loginData)
      .subscribe(
        response => {
          console.log("Registro bem-sucedido: (backend retorna 200 e body null)", response);
        },
        error => {
          console.log("Erro ao fazer registro: ", error);
        }
      );


    this.resetInputs = true;
    setTimeout(() => this.resetInputs = false, 0);

  }
}
