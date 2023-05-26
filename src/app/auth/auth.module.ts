import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule} from "@angular/forms";
import {PagesModule} from "../pages/pages.module";


@NgModule({
  declarations: [
    LoginComponent,
    ErrorPageComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class AuthModule { }
