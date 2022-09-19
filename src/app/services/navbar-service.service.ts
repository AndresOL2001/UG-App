import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {
  visible: boolean;
  public rol:string;
  public usuario:string;

  constructor() { 
    this.rol = localStorage.getItem('auth');
    this.usuario=localStorage.getItem('user');

   }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  verificarUsuario() { 
   this.usuario = localStorage.getItem('user');
   this.rol = localStorage.getItem('auth');

  }
}
