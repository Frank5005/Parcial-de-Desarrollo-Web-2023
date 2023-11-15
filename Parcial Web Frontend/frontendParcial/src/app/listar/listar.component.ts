import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro.model';
import { LibrosService } from '../services/libros.service';
import { Biblioteca } from '../models/biblioteca.model';
import { BibliotecaService } from '../services/biblioteca.service';

@Component({
  selector: 'app-listar',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private librosService: LibrosService, private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    this.obtenerLibros();
    this.obtenerBibliotecas();
  }

  obtenerLibros(): void {
    this.librosService.obtenerLibros().subscribe((libros) => (this.libros = libros));
  }

  bibliotecas: Biblioteca[] = [];

  obtenerBibliotecas(): void {
    this.bibliotecaService.obtenerBibliotecas().subscribe((bibliotecas) => (this.bibliotecas = bibliotecas));
  }
}
