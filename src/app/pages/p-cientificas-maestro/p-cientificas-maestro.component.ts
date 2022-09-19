import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-p-cientificas-maestro',
  templateUrl: './p-cientificas-maestro.component.html',
  styleUrls: ['./p-cientificas-maestro.component.css']
})
export class PCientificasMaestroComponent implements OnInit {

  misProducciones: any[] = [];

  constructor(private router:Router) {
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

  dispararAlerta(titulo) {
    Swal.fire({
      title: titulo,
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Rechazar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Publicada correctamente!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios fueron cancelados', '', 'info')
      }
    })
  }

  accion(produccion) {
    console.log(produccion);
    if (produccion.validacion == 'Aceptada') {

      if (produccion.tipo == 'Articulo') {
        this.dispararAlerta('¿Estas segúro que deseas publicar este Articulo?')
      }

      if (produccion.tipo == 'Libro') {
        this.dispararAlerta('¿Estas segúro que deseas publicar este Libro?')

      }

      if (produccion.tipo == 'Ponencia') {
        this.dispararAlerta('¿Estas segúro que deseas publicar esta Ponencia?')

      }

      if (produccion.tipo == 'CapituloLibro') {
        this.dispararAlerta('¿Estas segúro que deseas publicar este Capitulo de libro?')

      }
    }else{
      if (produccion.tipo == 'Articulo') {
        this.router.navigateByUrl('/articulo/123');
      }

      if (produccion.tipo == 'Libro') {
        this.router.navigateByUrl('/libro/123');

      }

      if (produccion.tipo == 'Ponencia') {
        this.router.navigateByUrl('/ponencia/123');

      }

      if (produccion.tipo == 'CapituloLibro') {
        this.router.navigateByUrl('/capitulolibro/123');

      }
    }


  }

}
