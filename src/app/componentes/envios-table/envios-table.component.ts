import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnvioFormComponent } from '../envio-form/envio-form.component';
import { EnviosService } from 'src/app/service/envios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-envios-table',
  templateUrl: './envios-table.component.html',
  styleUrls: ['./envios-table.component.scss']
})
export class EnviosTableComponent {

  dataSource!: MatTableDataSource<any>;

  constructor(
    private modal: MatDialog,
    private service: EnviosService, 
    private message: MessageService
    ){}

  displayedColumns: string[] = [
    'empresa',
    'direccion', 
    'code', 
    'destinatario', 
    'remitente', 
    'peso', 
    'precio', 
    'borrar'
  ];

  ngOnInit(): void {
    this.getEnviosList()
  }

  getEnviosList(){
    this.service.getEnvios().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
      },
    });
  }

  openEnvio(){
    const dialogRef = this.modal.open(EnvioFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEnviosList();
        }
      },
    });
  }

  deleteEnvio(id: number){
    this.service.deleteEnvio(id).subscribe({
      next: (res) => {
        this.message.openSnackBar('Envio borrado!', 'done');
        this.getEnviosList();
      },
    });
  }
}
