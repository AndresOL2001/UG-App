import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { eventosComponent } from './pages/eventos/eventos.component';
import { consultasComponent } from './pages/Consultas/consultas.component'
import { acercaDeComponent } from '../app/pages/acercaDe/acercaDe.component';
import { ConsultaspublicasComponent } from './pages/consultaspublicas/consultaspublicas.component';
import { PCientificasComponent } from './pages/p-cientificas/p-cientificas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { CambiarPeriodoComponent } from './pages/cambiar-periodo/cambiar-periodo.component';
import { CrearpcientificasComponent } from './pages/crearpcientificas/crearpcientificas.component';
import { PonenciaComponent } from './pages/ponencia/ponencia.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { LibroComponent } from './pages/libro/libro.component';
import { CapitulolibroComponent } from './pages/capitulolibro/capitulolibro.component';
import { ValidacionpCientificaComponent } from './pages/validacionp-cientifica/validacionp-cientifica.component';
import { PCientificasMaestroComponent } from './pages/p-cientificas-maestro/p-cientificas-maestro.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { DocenteEspecificoComponent } from './pages/docente-especifico/docente-especifico.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent,
  },
  {
    path:'acercaDe',
    component:acercaDeComponent
  },
  {
    path:'consultas',
    component:consultasComponent
  },
  {
    path:'eventos',
    component:eventosComponent
  },
  {
    path:'consultasPublicas',
    component:ConsultaspublicasComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'producciones',
    component:PCientificasComponent
  },
  {
    path:'ajustes',
    component:AjustesComponent
  },
  {
    path:'cambiarPeriodo',
    component:CambiarPeriodoComponent

  },
  {
    path:'crearProduccion',
    component:CrearpcientificasComponent
  },
  {
    path:'ponencia',
    component:PonenciaComponent
  },
  {
    path:'ponencia/:id',
    component:PonenciaComponent
  },
  {
    path:'articulo',
    component:ArticuloComponent
  },
  {
    path:'docentes',
    component:DocentesComponent
  },
  {
    path:'crearDocente',
    component:DocenteEspecificoComponent
  },
  {
    path:'docentes/:id',
    component:DocenteEspecificoComponent
  },
  {
    path:'articulo/:id',
    component:ArticuloComponent
  },
  {
    path:'libro',
    component:LibroComponent
  },
  {
    path:'libro/:id',
    component:LibroComponent
  },
  {
    path:'capitulolibro',
    component:CapitulolibroComponent
  },
  {
    path:'capitulolibro/:id',
    component:CapitulolibroComponent
  },
  {
    path:'validacionProducciones',
    component:ValidacionpCientificaComponent
  },
  {
    path:'produccionesCientificas/:idMaestro',
    component:PCientificasMaestroComponent
  },
  {
    path:'mensajes',
    component:MensajesComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'**',
    redirectTo:'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
