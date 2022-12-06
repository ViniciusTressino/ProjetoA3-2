import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Carlos', weight: 345635634, symbol: '06/12/2022' },
  { position: 2, name: 'José', weight: 345634536, symbol: '05/12/2022' },
  { position: 3, name: 'Gabriel', weight: 345346345, symbol: '05/12/2022' },
  { position: 4, name: 'Roberto', weight: 563456346, symbol: '05/12/2022' },
  { position: 5, name: 'Daniel', weight: 163456354, symbol: '05/12/2022' },
  { position: 6, name: 'Carla', weight: 165364366, symbol: '04/12/2022' },
  { position: 7, name: 'Rodrigo', weight: 563563566, symbol: '04/12/2022' },
  { position: 8, name: 'Aline', weight: 563563456, symbol: '04/12/2022' },
  { position: 9, name: 'Mauricio', weight: 785685674, symbol: '03/12/2022' },
  { position: 10, name: 'Danielle', weight: 634563563, symbol: '03/12/2022' },
];
