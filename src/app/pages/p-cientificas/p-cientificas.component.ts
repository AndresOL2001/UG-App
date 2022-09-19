import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';

@Component({
  selector: 'app-p-cientificas',
  templateUrl: './p-cientificas.component.html',
  styleUrls: ['./p-cientificas.component.css']
})
export class PCientificasComponent implements OnInit {
  usuario;rol;
  constructor(private navbarService:NavbarServiceService) { }

  ngOnInit(): void {
    this.usuario = this.navbarService.usuario;
    this.rol = this.navbarService.rol;
  }

}
