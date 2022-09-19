import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private navbarService:NavbarServiceService,private router:Router) { }

  usuario:string;
  contrasena:string;

  usuarios =[
    {
    usuario:'maestro',
    contraseña:'123456',
    rol:'Maestro'
    },
    {
      usuario:'gestor',
      contraseña:'1234567',
      rol:'Gestor'
    },
]

  ngOnInit(): void {
    const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});
  }

  autenticar(usuario,contrasena){
    let autenticado = this.usuarios.filter(x=>x.usuario==usuario && x.contraseña==contrasena);
    if(autenticado.length>0){
      localStorage.setItem('auth',autenticado[0].rol);
      localStorage.setItem('user',autenticado[0].usuario);
      Swal.fire('Exito','Bienvenido: '+autenticado[0].usuario,'success');
      this.navbarService.verificarUsuario();
      this.router.navigate(['/producciones']);
    }else{
      Swal.fire('Error','Credenciales Incorrectas','error');
    }

  }
}
