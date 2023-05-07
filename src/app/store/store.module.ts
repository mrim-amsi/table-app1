import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { TablePageComponent } from './components/table-page/table-page.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        TablePageComponent
    ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        RouterOutlet,
        SharedModule,
        
    ]
})
export class StoreModule { }
