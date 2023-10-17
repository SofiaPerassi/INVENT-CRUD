import { Component } from '@angular/core';

@Component({
  selector: 'app-paquetes-table',
  templateUrl: './paquetes-table.component.html',
  styleUrls: ['./paquetes-table.component.scss']
})
export class PaquetesTableComponent {
  displayedColumns: string[] = ['tipo', 'kg'];
  dataSource = [
    {tipo: 'Paquete ultra ligero', kg: '0 < kg ≤ 0.1'},
    {tipo: 'Paquete ligero', kg: '0.1 < kg ≤ 0.3'},
    {tipo: 'Paquete estándar', kg: '0.3 < kg ≤ 5'},
    {tipo: 'Paquete pesado', kg: '5 < kg ≤ 10'},
    {tipo: 'Gran volúmen', kg: '10 < kg ≤ ∞'},
  ]
}
