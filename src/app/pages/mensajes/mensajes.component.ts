import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
mensajes:any[] = [];
  constructor() {
    this.mensajes = [
      {
        correo: 'pedro@hotmail.com',
        celular: '6623091212',
        mensaje: 'Mensaje 1',
      },
      {
        correo: 'pedro@hotmail.com',
        celular: '6623091212',
        mensaje: 'Mensaje 1',
      },
      {
        correo: 'pedro@hotmail.com',
        celular: '6623091212',
        mensaje: 'Mensaje 1',
      },
      {
        correo: 'pedro@hotmail.com',
        celular: '6623091212',
        mensaje: 'Mensaje 1',
      },
      {
        correo: 'pedro@hotmail.com',
        celular: '6623091212',
        mensaje: 'Mensaje 1',
      },
     
    ]

   }

  ngOnInit(): void {
  }

  accion(){
    Swal.fire({
      title: 'Confirmar para eliminar el mensaje',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'No',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Correcto!',
          'Se ha eliminado el mensaje !',
          'success'
        )
      }else{
        Swal.fire(
          'Correcto!',
          'No se ha eliminado el mensaje',
          'success'
        )
      }
    })
  }
}
