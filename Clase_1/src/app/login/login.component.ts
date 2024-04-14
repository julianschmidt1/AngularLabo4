import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from '../error/error.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, ErrorComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData: UserModel = {
    name: '',
    password: '',
  }

  constructor(
    private _router: Router
  ) { }

  activeError: boolean = false;

  login() {
    if (Object.values(this.loginData).every(v => v.length >= 4)) {
      console.log(this.loginData);
      this._router.navigateByUrl('welcome');
    } else {
      this.activeError = true;
    }
  }

  onChange() {
    console.log(this.activeError);

    if (this.activeError) this.activeError = false;
  }



}
