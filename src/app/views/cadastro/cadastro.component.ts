import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nome_cad!: String;

  adicionarPaciente() {
    alert('Paciente cadastrado com sucesso!');  
  }
}
