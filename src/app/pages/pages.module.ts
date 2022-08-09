import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { acercaDeComponent } from './acercaDe/acercaDe.component';
import { InicioComponent } from './inicio/inicio.component';
import { eventosComponent } from './eventos/eventos.component';
import { produccionesComponent } from './producciones/producciones.component';


@NgModule({
  declarations: [acercaDeComponent,InicioComponent,eventosComponent,produccionesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[acercaDeComponent,InicioComponent,eventosComponent,produccionesComponent]
})
export class PagesModule { }
