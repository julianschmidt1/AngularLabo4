import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserModel } from './models/user.model';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // edadUno: number = 0;
  // edadDos: number = 0;
  // suma: number = 0;
  // promedio: number = 0;
  // calcular() {
  //   this.suma = this.edadUno + this.edadDos;

  //   this.promedio = this.suma / 2;
  // }
  // limpiar() {
  //   this.edadDos = 0;
  //   this.edadUno = 0;
  //   this.promedio = 0;
  //   this.suma = 0;
  // }

  loginData: UserModel = {
    name: '',
    password: '',
  }

  login(){
    console.log(this.loginData);
  } 


}