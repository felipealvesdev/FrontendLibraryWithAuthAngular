import { logout } from './../../state/auth/auth.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit, OnDestroy {

  private currentDate: Date;
  private dateCheckInterval: any;

  constructor(
    private store: Store<AuthState>,
    private router: Router,
    private authService: AuthService
  ) {
    this.currentDate = new Date();
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.startDateMonitoring();
  }

  ngOnDestroy(): void {
    if (this.dateCheckInterval) {
      clearInterval(this.dateCheckInterval);
    }
  }

  startDateMonitoring(): void {
    this.dateCheckInterval = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== this.currentDate.getDate()) {
        this.onDateChange();
        this.currentDate = now;
      }
    }, 60000);
  }

  onDateChange(): void {
    console.log('A data mudou para', this.currentDate);
  }

  getDate(): Date {
    return this.currentDate;
  }

}
