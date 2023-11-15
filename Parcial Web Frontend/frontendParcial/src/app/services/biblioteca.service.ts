// src/app/services/biblioteca.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca } from '../models/biblioteca.model';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  private apiUrl = 'http://localhost:puerto/api/bibliotecas';

  constructor(private http: HttpClient) {}

  obtenerBibliotecas(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.apiUrl);
  }
}

