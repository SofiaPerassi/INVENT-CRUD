import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Empresa } from 'src/app/models/models';
import { MessageService } from 'src/app/service/message.service';
import { TransporteService } from 'src/app/service/transporte.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss']
})
export class EmpresaFormComponent {

  empresaForm: FormGroup;

  precio: number = 0;

  constructor(
    private fb: FormBuilder, 
    private service: TransporteService,
    private dialogRef: MatDialogRef<EmpresaFormComponent>,
    private message: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.empresaForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        code: ['', [Validators.required]],
        provincia: [ '', [Validators.required]],
        municipio: [ '', [Validators.required]],
        contacto: [ , [Validators.required]],
      },
      {  }
    );
  }

  ngOnInit(): void {
    this.empresaForm.patchValue(this.data);
  }

  onSubmit() {
    const {
      id,
      name,
      code, 
      provincia, 
      municipio,
      contacto
    } = this.empresaForm.value;

    const newEmpresa: Empresa = {
      id : id,
      name: name,
      code: code,
      provincia: provincia,
      municipio: municipio,
      contacto: contacto
    };

    const currentData: Empresa = {
      id,
      name,
      code, 
      provincia, 
      municipio,
      contacto
    }

    if (this.empresaForm.valid) {
      if(this.data){
        this.service
        .editEmpresa(this.data.id, newEmpresa)
        .subscribe({
          next: (val: any) => {
            this.message.openSnackBar('La empresa ha sido editada con exito!');
            this.dialogRef.close(true);
            // this.getQuestion.getQuestionsList()
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.service.createEmpresa(newEmpresa).subscribe({
          next: (val: any) => {
            this.message.openSnackBar('La empresa fue creada con éxito!');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}
