import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

// Shared
import { SharedModule } from '../shared/shared.module';
import { AlertComponent } from '../components/alert/alert.component';


// For use [(ngModule)] in html
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { CommonModule } from '@angular/common';

// Guards
import { AuthGuard } from '../guards/auth.guard';

// Pipes
import { SafePipe } from '../pipes/safepipe';
import { AwsPipe } from '../pipes/awspipe';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MarcasComponent } from './marcas/marcas.component';
import { EmpresasComponent } from './empresas/empresas.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        SafePipe,
        AwsPipe,
        AlertComponent,
        UsuariosComponent,
        MarcasComponent,
        EmpresasComponent,
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        CommonModule
    ],
    providers: [
        AuthGuard
    ]
})

export class PagesModule { }
