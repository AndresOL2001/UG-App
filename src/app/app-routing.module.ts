import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProduccionesComponent } from './pages/producciones/producciones.component';
import { ValidacionComponent } from './pages/validacion/validacion.component';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent,
  },
  {
    path:'validacion',
    component:ValidacionComponent
  },
  {
    path:'producciones',
    component:ProduccionesComponent
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
