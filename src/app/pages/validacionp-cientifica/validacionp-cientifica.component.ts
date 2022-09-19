import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validacionp-cientifica',
  templateUrl: './validacionp-cientifica.component.html',
  styleUrls: ['./validacionp-cientifica.component.css']
})
export class ValidacionpCientificaComponent implements OnInit {

  listaArticulos:any[]=[];

  listaPonencias:any[]=[];

  listaLibros:any[]=[];

  listaCapituloLibros:any[]=[];

  closeResult = '';

  constructor() {

    this.listaArticulos = [
      {
        titulo:'Articulo 1',
        base_datos:'Postgresql',
        codigo_isnn:'12102',
        tipo_indexacion:'nose',
        nombre_revista:'excelsior',
        numero_revista:'24',
        quartil:'1',
        SJR:'2',
        fecha_publicacion:'17/09/2022',
        campo_detallado:'nose',
        estado:'en espera',
        link_publicacion:'www.com',
        link_revista:'www.com',
        afilicacion_ug:'no',
        dominio_cientifico:'www.com',
        linea_investigacion:'industrial',
        sublinea_investigacion:'matematicas',
        validado:'no',
        observaciones:'ninguna',
        maestros:[
          {
           nombre:'Juan Perez',
           participacion:'Creador',
           facultad:'Ingenieria Industrial'
          },
          {
           nombre:'Andrés Olaje',
           participacion:'CoCreador',
           facultad:'Ingenieria Industrial'
          },
          {
           nombre:'Roberto gonzales',
           participacion:'CoCreador',
           facultad:'Ingenieria Industrial'
          },
        ] 
      },
      {
        titulo:'Articulo 2',
      },
      {
        titulo:'Articulo 3'
      },
    ]

    this.listaCapituloLibros = [
      {
        titulo:'Capitulo 1',
        numero_paginas:'29',
        titulo_libro:'El pescador',
        maestros:[
         {
          nombre:'Juan Perez',
          participacion:'Creador',
          facultad:'Ingenieria Industrial'
         },
         {
          nombre:'Andrés Olaje',
          participacion:'CoCreador',
          facultad:'Ingenieria Industrial'
         },
         {
          nombre:'Roberto gonzales',
          participacion:'CoCreador',
          facultad:'Ingenieria Industrial'
         }
        ]
      },
      {
        titulo:'Capitulo 2',
      },
      {
        titulo:'Capitulo 3'
      },
    ]

    this.listaLibros = [
      {
        codigo_ug:'1293912',
        titulo:'Libro 1',
        codigo_isbn:'ALKSDL',
        editor:'excelsior',
        numero_paginas:'192',
        fecha_publicacion:'17/09/2022',
        link_publicacion:'www.com',
        campo_detallado:'nose',
        afiliacion_ug:'no',
        revision_por_pares:'no',
        dominio_cientifico:'www.com',
        linea_investigacion:'Ingenieria Industrial',
        sublinea_investigacion:'Matematicas',
        titulo_proyecto:'Libro 1',
        validado_cigc:'en espera',
        observacion_cigc:'ninguna',
        maestros:[
          {
           nombre:'Juan Perez',
           participacion:'Creador',
           facultad:'Ingenieria Industrial'
          },
          {
           nombre:'Andrés Olaje',
           participacion:'CoCreador',
           facultad:'Ingenieria Industrial'
          },
          {
           nombre:'Roberto gonzales',
           participacion:'CoCreador',
           facultad:'Ingenieria Industrial'
          },
        ] 
      },
      {
        titulo:'Libro 2',
      },
      {
        titulo:'Libro 3'
      },
    ]

    this.listaPonencias = [
      {
        titulo:'Ponencia 1',
        codigo_ug:'ASKLD-202',
        nombre:'Nombre de la ponencia',
        evento:'nose',
        base_datos:'excelsior',
        codigo_isbn:'24',
        tipo_indexacion:'1',
        edicion_evento:'2',
        organizador_evento:'pacheco dominguez',
        comite_organizador:'nose',
        pais:'ecuador',
        ciudad:'guayaquil',
        fecha_publicacion:'17/09/2022',
        quartil:'no',
        SJR:'123',
        campo_detallado:'no',
        link_publicacion:'www.com',
        dominio_cientifico:'www.com',
        linea_investigacion:'ingenieria industrial',
        sublinea_investigacion:'matematicas',
        titulo_proyecto:'Proyecto 1',
        validado_cigc:'no',
        observacion_cigc:'ninguna',
        maestros:[
          {
           nombre:'Juan Perez',
           participacion:'Creador',
           facultad:'Ingenieria Industrial'
          },
          {
           nombre:'Andrés Olaje',
           participacion:'CoCreador',
           facultad:'Ingenieria Industrial'
          },
          {
           nombre:'Roberto gonzales',
           participacion:'CoCreador',
           facultad:'Ingenieria Industrial'
          },
        ]         
      },
      {
        titulo:'Ponencia 2',
      },
      {
        titulo:'Ponencia 3'
      },
    ]
  }

  ngOnInit(): void {
  }
  modalBool=false;

  @ViewChild('myModal', {static: false}) modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
    
  }
 openModal(){
  this.open();
 }
  close() {
    this.modal.nativeElement.style.display = 'none';
    this.ArticuloActual = "";
    this.PonenciaActual = "";
    this.LibroActual = "";
    this.capituloLibroActual = "";
  }

  ArticuloActual ;
  abrirModalArticulo(articulo){
    this.ArticuloActual = articulo;
    this.modalBool=true;
    this.open();
  }

  PonenciaActual;
  abrirModalPonencia(ponencia){
    this.PonenciaActual = ponencia;
    this.modalBool=true;
    this.open();
  }

  LibroActual;
  abrirModalLibro(libro){
    this.LibroActual = libro;
    this.modalBool=true;
    this.open();
  }

  capituloLibroActual;
  abrirModalCapituloLibro(capitulo){
    this.capituloLibroActual = capitulo;
    this.modalBool=true;
    this.open();
  }
}
