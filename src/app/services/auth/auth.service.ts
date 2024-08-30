import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.reducer';
import { selectToken } from '../../state/auth/auth.selectors';
import { logout } from '../../state/auth/auth.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private store: Store<AuthState>,
    private router: Router
  ) {}

  login(loginData: any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/auth/login`, loginData);
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.pipe(
      select(selectToken),
      map(token => !!token)
    )
  }

  logout(): void {
    this.store.dispatch(logout());
    console.log("Disparou logout")
    this.router.navigate(['/login']);
  }
}
