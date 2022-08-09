import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { eventosComponent } from './pages/eventos/eventos.component';
import { produccionesComponent } from './pages/producciones/producciones.component';
import { acercaDeComponent } from '../app/pages/acercaDe/acercaDe.component';
import { InicioAdmiComponent } from './admi/inicio-admi/inicio-admi.component';

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
    path:'producciones',
    component:produccionesComponent
  },
  {
    path:'eventos',
    component:eventosComponent
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
