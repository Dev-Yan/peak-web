// src/app/features/shared/services/api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }
}
