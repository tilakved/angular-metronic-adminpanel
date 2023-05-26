import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any = '123';
  password: any = '123';

  constructor(public router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  signUp() {
    this.router.navigateByUrl('dashboard')
  }
}
