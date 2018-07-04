import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarService, SharedService, AlertService, JWTService, UsuarioService, MarcaService, EmpresaService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MarcaService,
    EmpresaService,
    SidebarService,
    SharedService,
    AlertService,
    JWTService,
    UsuarioService
  ],
  declarations: []
})
export class ServiceModule { }
