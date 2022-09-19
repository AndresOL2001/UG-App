import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PassCambioComponent } from './pass-cambio/pass-cambio.component';
import { PassRecuperarComponent } from './pass-recuperar/pass-recuperar.component';

const routes: Routes = [
 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cambiarContraseña',
    component:PassCambioComponent
  },
  {
    path:'recuperarContraseña',
    component:PassRecuperarComponent
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
