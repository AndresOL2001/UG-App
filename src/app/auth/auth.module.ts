import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PassCambioComponent } from './pass-cambio/pass-cambio.component';
import { FormsModule } from '@angular/forms';
import { PassRecuperarComponent } from './pass-recuperar/pass-recuperar.component';


@NgModule({
  declarations: [LoginComponent, PassCambioComponent, PassRecuperarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
