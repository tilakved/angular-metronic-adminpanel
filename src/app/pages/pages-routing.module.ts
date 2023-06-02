import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { guard } from '../core/guard/guard.guard';
import {ErrorPageComponent} from "../auth/error-page/error-page.component";

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path:'dashboard',
        component:DashboardComponent,
      },
      { path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
