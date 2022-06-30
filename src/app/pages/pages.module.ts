import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ConsultasComponent } from './consultas/consultas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProduccionesComponent } from './producciones/producciones.component';
import { ValidacionComponent } from './validacion/validacion.component';


@NgModule({
  declarations: [ConsultasComponent,InicioComponent,ProduccionesComponent,ValidacionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[ConsultasComponent,InicioComponent,ProduccionesComponent,ValidacionComponent]
})
export class PagesModule { }
