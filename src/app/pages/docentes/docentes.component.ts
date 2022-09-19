import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  misProducciones:any[]=[];
  constructor() {
    this.misProducciones = [
      {
        tipo: 'Articulo',
        titulo: 'Articulo 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Articulo',
        titulo: 'Articulo 2',
        validacion: 'Aceptada',
        publicacion: 'Publicar'
      },
      {
        tipo: 'Libro',
        titulo: 'Libro 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Articulo',
        titulo: 'Articulo 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Articulo',
        titulo: 'Articulo 2',
        validacion: 'Aceptada',
        publicacion: 'Publicar'
      },
      {
        tipo: 'Libro',
        titulo: 'Libro 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'Ponencia',
        titulo: 'Ponencia 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
      {
        tipo: 'CapituloLibro',
        titulo: 'Capitulo Libro 1',
        validacion: 'Rechazada',
        publicacion: 'Visualizar'
      },
    ]
   }

  ngOnInit(): void {
  }

}
