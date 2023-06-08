import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomCalendarModule} from "custom-calendar2";
import {NgxDatatableModule} from "@tusharghoshbd/ngx-datatable";
import {PipesModule} from "../core/pipes/pipes.module";



@NgModule({
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CustomCalendarModule,
    NgxDatatableModule,
    PipesModule
  ]
})
export class PagesModule { }
