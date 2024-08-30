import { logout } from './../../state/auth/auth.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.reducer';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    private store: Store<AuthState>,
    private router: Router,
    private authService: AuthService
  ) {}

  logout(): void {
    this.authService.logout();
  }
}
