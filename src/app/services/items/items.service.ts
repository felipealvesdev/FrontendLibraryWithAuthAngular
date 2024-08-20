// src/app/services/items.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Isso torna o serviço disponível em toda a aplicação
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>('https://api.exemplo.com/items');
  }
}
