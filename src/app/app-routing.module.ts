import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { eventosComponent } from './pages/eventos/eventos.component';
import { consultasComponent } from './pages/Consultas/consultas.component'
import { acercaDeComponent } from '../app/pages/acercaDe/acercaDe.component';
import { InicioAdmiComponent } from './admi/inicio-admi/inicio-admi.component';
import { ConsultaspublicasComponent } from './pages/consultaspublicas/consultaspublicas.component';
import { PCientificasComponent } from './pages/p-cientificas/p-cientificas.component';
import { HistorialpcientificasComponent } from './pages/historialpcientificas/historialpcientificas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

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
    path:'pCientificas',
    component:PCientificasComponent
  },
  {
    path:'historialpCientificas',
    component:HistorialpcientificasComponent
  },
  {
    path:'admi',
    component:InicioAdmiComponent,
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
