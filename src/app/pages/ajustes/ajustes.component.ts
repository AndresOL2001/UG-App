import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {
  usuario;rol;
  constructor(private navbarService:NavbarServiceService) { }

  ngOnInit(): void {
    this.usuario = this.navbarService.usuario;
    this.rol = this.navbarService.rol;
  }

}
