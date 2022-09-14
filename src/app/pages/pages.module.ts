import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { acercaDeComponent } from './acercaDe/acercaDe.component';
import { InicioComponent } from './inicio/inicio.component';
import { eventosComponent } from './eventos/eventos.component';
import { consultasComponent } from './Consultas/consultas.component';
import { PCientificasComponent } from './p-cientificas/p-cientificas.component';
import { ConsultaspublicasComponent } from './consultaspublicas/consultaspublicas.component';
import { HistorialpcientificasComponent } from './historialpcientificas/historialpcientificas.component';

@NgModule({
  declarations: [acercaDeComponent,InicioComponent,eventosComponent,consultasComponent, PCientificasComponent, ConsultaspublicasComponent, HistorialpcientificasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[acercaDeComponent,InicioComponent,eventosComponent,consultasComponent, PCientificasComponent, ConsultaspublicasComponent, HistorialpcientificasComponent]
})
export class PagesModule { }
