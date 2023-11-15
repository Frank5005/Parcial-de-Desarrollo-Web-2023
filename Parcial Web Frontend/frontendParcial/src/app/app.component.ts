import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Libro } from './models/libro.model';
import { Biblioteca } from './models/biblioteca.model';
import { LibrosService } from './services/libros.service';


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

    constructor(private libroService: LibrosService) {}

  insertarLibro(libro: Libro): void {
    // Lógica para agregar el libro a través del servicio
    this.libroService.insertarLibro(libro).subscribe(
      nuevoLibro => {
        this.libros.push(nuevoLibro);
        console.log('Libro agregado:', nuevoLibro);
      },
      error => {
        console.error('Error al agregar el libro:', error);
      }
    );
  }
}

