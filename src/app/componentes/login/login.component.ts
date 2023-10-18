import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/models/models';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service: AuthService,
    private router: Router, 
    private message: MessageService
  ){
    this.userForm = this.fb.group(
      {
        usuario: ['', [Validators.required]],
        contraseña: ['', [Validators.required]]
      },
      {  }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const {
      id,
      usuario,
      contraseña
    } = this.userForm.value;

    const newUser: UsuarioLogin = {
      id : id,
      usuario: usuario,
      contraseña: contraseña
    };

    const currentData: UsuarioLogin = {
      id,
      usuario,
      contraseña
    }

    if (this.userForm.valid) {
        this.service.login(usuario, contraseña).subscribe({
          next: (val: boolean) => {      
            if (val === true) {
            this.router.navigate(['/dashboard']);
            } else {
              this.message.openSnackBar('Usuario o contraseña incorrectos', 'error');
            }
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }

}
