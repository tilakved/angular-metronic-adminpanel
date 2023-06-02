import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPageComponent} from "./auth/error-page/error-page.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
