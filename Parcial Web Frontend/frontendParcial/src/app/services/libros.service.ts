import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:puerto/api/libros';

  constructor(private http: HttpClient) {}

  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  insertarLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }
}


