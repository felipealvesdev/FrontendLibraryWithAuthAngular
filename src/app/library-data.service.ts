import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryDataService {

  private apiUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books`)
  }

  sendLogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data)
  }

  sendRegister(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data)
  }
}
