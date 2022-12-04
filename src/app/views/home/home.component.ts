import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ipc() {
    location.href = './cadastro'
  }

  ipa() {
    location.href = './agenda'
  }

  ipl() {
    location.href = './login'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
