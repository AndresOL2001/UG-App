import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { acercaDeComponent } from './acercaDe/acercaDe.component';
import { InicioComponent } from './inicio/inicio.component';
import { eventosComponent } from './eventos/eventos.component';
import { consultasComponent } from './Consultas/consultas.component';
import { PCientificasComponent } from './p-cientificas/p-cientificas.component';
import { ConsultaspublicasComponent } from './consultaspublicas/consultaspublicas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AjustesComponent } from './ajustes/ajustes.component';
import { CambiarPeriodoComponent } from './cambiar-periodo/cambiar-periodo.component';
import { RouterModule } from '@angular/router';
import { CrearpcientificasComponent } from './crearpcientificas/crearpcientificas.component';
import { PonenciaComponent } from './ponencia/ponencia.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { LibroComponent } from './libro/libro.component';
import { CapitulolibroComponent } from './capitulolibro/capitulolibro.component';
import { ValidacionpCientificaComponent } from './validacionp-cientifica/validacionp-cientifica.component';
import { PCientificasMaestroComponent } from './p-cientificas-maestro/p-cientificas-maestro.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DocentesComponent } from './docentes/docentes.component';
import { DocenteEspecificoComponent } from './docente-especifico/docente-especifico.component';

@NgModule({
  declarations: [acercaDeComponent,InicioComponent,eventosComponent,consultasComponent, PCientificasComponent, ConsultaspublicasComponent, ContactoComponent, AjustesComponent, CambiarPeriodoComponent, CrearpcientificasComponent, PonenciaComponent, ArticuloComponent, LibroComponent, CapitulolibroComponent, ValidacionpCientificaComponent, PCientificasMaestroComponent, MensajesComponent, DocentesComponent, DocenteEspecificoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports:[acercaDeComponent,InicioComponent,eventosComponent,consultasComponent, PCientificasComponent, ConsultaspublicasComponent]
})
export class PagesModule { }
