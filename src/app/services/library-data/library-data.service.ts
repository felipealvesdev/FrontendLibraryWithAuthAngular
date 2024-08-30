import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { loginBodyRequest, registerBodyRequest } from '../../models/library.model';
import { Store } from '@ngrx/store';
import { AuthState } from '../../state/auth/auth.reducer';
import { selectToken } from '../../state/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class LibraryDataService {

  private apiUrl = `${environment.apiUrl}`

  constructor(
    private http: HttpClient,
    private store: Store<AuthState>
  ) { }

  getAllBooks(): Observable<any> {
    return this.store.select(selectToken).pipe(
      take(1),
      switchMap(token => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<any>(`${this.apiUrl}/books`, { headers });
      })
    );
  }

  sendLogin(data: loginBodyRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data)
  }

  sendRegister(data: registerBodyRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data)
  }
}
