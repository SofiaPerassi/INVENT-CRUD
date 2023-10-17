import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajadores-table',
  templateUrl: './trabajadores-table.component.html',
  styleUrls: ['./trabajadores-table.component.scss']
})
export class TrabajadoresTableComponent {
  displayedColumns: string[] = ['user', 'email'];
  dataSource = [
    {user: 'Sofia Perassi', email: 'sofiaperassi@outlook.com'},
    {user: 'Marta Lopez', email: 'martalopez@gmail.com'},
    {user: 'Pedro Martinez', email: 'pmartinez@gmail.com'},
    {user: 'Juan Campos', email: 'juan.campos@outlook.com'},
  ]
}
