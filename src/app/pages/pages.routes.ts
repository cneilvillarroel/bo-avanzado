import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Guards
import { AuthGuard } from '../guards/auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MarcasComponent } from './marcas/marcas.component';
import { EmpresasComponent } from './empresas/empresas.component';


const pagesRoutes: Routes = [
    { path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}, canActivate: [AuthGuard] },                
            { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Usuarios'}, canActivate: [AuthGuard] },   
            { path: 'marcas', component: MarcasComponent, data: {titulo: 'Marcas'}, canActivate: [AuthGuard] },            
            { path: 'empresas', component: EmpresasComponent, data: {titulo: 'Empresas'}, canActivate: [AuthGuard] },            
            { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard]}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
