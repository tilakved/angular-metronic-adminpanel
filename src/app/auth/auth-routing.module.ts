import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '' , redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path:'',loadChildren:()=>import('../pages/pages.module').then(m =>m.PagesModule)},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
