import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { guard } from '../core/guard/guard.guard';
import {ErrorPageComponent} from "../auth/error-page/error-page.component";

const routes: Routes = [
  {
    path:'pages',
    component: PagesComponent,
    canActivate: [guard],
    children: [
      {
        path:'dashboard',
        component: DashboardComponent,
      },
      {
        path: '**',
        component: ErrorPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
