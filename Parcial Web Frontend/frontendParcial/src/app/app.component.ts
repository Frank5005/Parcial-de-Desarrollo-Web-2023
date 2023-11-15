import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Libro } from './models/libro.model';
import { Biblioteca } from './models/biblioteca.model';


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendParcial';
  libros: Libro[] = [];
  bibliotecas: Biblioteca[] = [];

  agregarLibro(libro: Libro): void {
    // Lógica para agregar el libro a través del servicio
  }

  agregarBiblioteca(biblioteca: Biblioteca): void {
    // Lógica para agregar la biblioteca a través del servicio
  }
}

