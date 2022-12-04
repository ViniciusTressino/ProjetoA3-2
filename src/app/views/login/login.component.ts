import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emails!: string;
  senha!: string;
  constructor() { }

  ngOnInit(): void {
  }
  logar() {

    
    if (this.emails == "admin" && this.senha == "admin") {
      console.log('Sucesso');
      location.href = './home'
    } else {
      console.log('Usuario ou senha invalido');

    }
  }

}
