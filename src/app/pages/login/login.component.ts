import { Component } from '@angular/core';
import { InputLoginComponent } from "../../components/input-login/input-login.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { loginBodyRequest } from '../../models/library.model';
import { Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.reducer';
import { loginFailure, loginSuccess } from '../../state/auth/auth.actions';
import { LoginResponse } from '../../models/login-response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputLoginComponent, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginValue: string = '';
  passwordValue: string = '';
  resetInputs: boolean = false;

  constructor(private http: HttpClient, private store: Store<AuthState>) {}

  onLoginValueChange(value: string) {
    this.loginValue = value;
  }

  onPasswordValueChange(value: string) {
    this.passwordValue = value;
  }

  onSubmit() {
    console.log(`Login: ${this.loginValue}`);
    console.log(`Password ${this.passwordValue}`);

    const loginData: loginBodyRequest = {
      login: this.loginValue,
      password: this.passwordValue,
    };

    this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginData)
      .subscribe(
        response => {
          console.log("Login bem-sucedido: ", response);
          this.store.dispatch(loginSuccess({token: response.token }));
        },
        error => {
          console.log("Erro ao fazer login: ", error);
          this.store.dispatch(loginFailure({ error }))
        }
      );


    this.resetInputs = true;
    setTimeout(() => this.resetInputs = false, 0);
  }
}
