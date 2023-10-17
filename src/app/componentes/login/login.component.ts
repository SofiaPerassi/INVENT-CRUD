import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/models/models';
import { AuthService } from 'src/app/service/auth.service';

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
    private router: Router
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
          next: (val: any) => {
            console.log(newUser)
            this.router.navigate(['/dashboard']);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }

}
