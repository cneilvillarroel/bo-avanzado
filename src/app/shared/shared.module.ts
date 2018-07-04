import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        SidebarComponent,
        NopagefoundComponent,
        FooterComponent
    ],
    exports: [
        SidebarComponent,
        NopagefoundComponent,
        FooterComponent
    ]
})

export class SharedModule {}
