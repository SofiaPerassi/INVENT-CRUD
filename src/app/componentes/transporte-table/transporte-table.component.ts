import { Component } from '@angular/core';
import { EmpresaFormComponent } from '../empresa-form/empresa-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Empresa } from 'src/app/models/models';
import { TransporteService } from 'src/app/service/transporte.service';
import { MessageService } from 'src/app/service/message.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transporte-table',
  templateUrl: './transporte-table.component.html',
  styleUrls: ['./transporte-table.component.scss']
})
export class TransporteTableComponent {
  
  constructor(
    private modal: MatDialog,
    private service: TransporteService, 
    private message: MessageService
    ){}

  displayedColumns: string[] = ['name', 'code', 'provincia', 'municipio', 'contacto', 'action'];
  
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.getEmpresasList()
  }

  openEmpresa(){
    const dialogRef = this.modal.open(EmpresaFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpresasList();
        }
      },
    });
  }

  getEmpresasList(){
    this.service.getEmpresas().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  openEditForm(data: Empresa){
    const dialogRef = this.modal.open(EmpresaFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpresasList();
        }
      },
    });
  }

  deleteEmpresa(id: number){
    this.service.deleteEmpresa(id).subscribe({
      next: (res) => {
        this.message.openSnackBar('Empresa borrada!', 'done');
        this.getEmpresasList();
      },
      error: console.log,
    });
  }
}
