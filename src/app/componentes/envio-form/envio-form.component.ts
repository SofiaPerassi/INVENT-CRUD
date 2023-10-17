import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Envios } from 'src/app/models/models';
import { EnviosService } from 'src/app/service/envios.service';

@Component({
  selector: 'app-envio-form',
  templateUrl: './envio-form.component.html',
  styleUrls: ['./envio-form.component.scss']
})
export class EnvioFormComponent {

  envioForm: FormGroup;

  precio: number = 0;

  empresa: string = '';

  constructor(
    private fb: FormBuilder, 
    private service: EnviosService,
    private dialogRef: MatDialogRef<EnvioFormComponent>,
  ){
    this.envioForm = this.fb.group(
      {
        direccion: ['', [Validators.required]],
        code: ['', [Validators.required]],
        destinatario: [ '', [Validators.required]],
        remitente: [ '', [Validators.required]],
        peso: [ , [Validators.required]],
      },
      {  }
    );
  }

  ngOnInit(): void {
  }

  calculatePrecio(peso: number){
    if (0 < peso && peso <= 0.1) {
      this.precio = peso * 5;
    } else if (0.1 < peso && peso <= 0.3) {
      this.precio = peso * 5 + 1;
    } else if (0.3 < peso && peso <= 5) {
      this.precio = peso * 10;
    } else if (5 < peso && peso <= 10) {
      this.precio = peso * 5 + peso + 75;
    } else {
      this.precio = (peso - 10) * 7.5 + 130 + peso;
    }
    return this.precio
  }

  selectTransporte(code: string){
    const subcode = code.substring(0, 2);
    if(subcode === '15' || subcode === '16' || subcode === '17' || subcode === '18' || subcode === '19'){
      this.empresa = 'Correos'
    } else if(subcode === '20' || subcode === '21' || subcode === '22' || subcode === '23' || subcode === '24' || subcode === '25'){
      this.empresa = 'Seur'
    } else {
      this.empresa = 'INVENT'
    }
    return this.empresa
  }

  onSubmit() {
    const {
      id,
      direccion,
      code, 
      destinatario, 
      remitente,
      peso
    } = this.envioForm.value;

    this.precio = this.calculatePrecio(peso);
    this.empresa = this.selectTransporte(code);

    const newEnvio: Envios = {
      id : id,
      direccion: direccion,
      code: code,
      destinatario: destinatario,
      remitente: remitente,
      peso: peso, 
      precio: this.precio, 
      empresa: this.empresa
    };

    const currentData: Envios = {
      id,
      direccion,
      code, 
      destinatario, 
      remitente,
      peso, 
      precio: this.precio,
      empresa: this.empresa
    }

    if (this.envioForm.valid) {
        this.service.createEnvio(newEnvio).subscribe({
          next: (val: any) => {
            // this.message.openSnackBar('La pregunta fue creada con éxito!');
            this.dialogRef.close(true);
            console.log(newEnvio)
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }

}
