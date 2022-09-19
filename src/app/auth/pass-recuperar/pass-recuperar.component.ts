import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pass-recuperar',
  templateUrl: './pass-recuperar.component.html',
  styleUrls: ['./pass-recuperar.component.css']
})
export class PassRecuperarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarCorreoRecuperacion(value){
    Swal.fire({
      title: 'Confirmar para enviar el correo electronico',
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
          'Se ha enviado un correo electrónico con su contraseña actual y recuerda que para hacer el cambio de contraseña ir a la pestaña de ajustes. Por favor en caso de no encontrar el correo en la bandeja de entrada principal revisar en la bandeja de correos no deseados',
          'success'
        )
      }else{
        Swal.fire(
          'Error!',
          'No se encuentra ningún correo electronico asociado',
          'error'
        )
      }
    })
  }

}
