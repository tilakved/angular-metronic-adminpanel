import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['login']);
  }

  toggleNavbar(){
  }

}
