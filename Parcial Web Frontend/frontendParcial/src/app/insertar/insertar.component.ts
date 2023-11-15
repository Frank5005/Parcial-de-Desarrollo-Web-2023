import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-insertar',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarComponent implements OnInit {
  @Output() libroCreado = new EventEmitter<Libro>();

  nuevoLibro: Libro = { nombre: '', autor: '', biblioteca: '' };

  constructor() {}

  ngOnInit(): void {}

  insertarLibro(): void {
    this.libroCreado.emit(this.nuevoLibro);
    this.nuevoLibro = { nombre: '', autor: '', biblioteca: '' };
  }

}
