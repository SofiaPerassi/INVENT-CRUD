import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';

import { EnviosTableComponent } from './componentes/envios-table/envios-table.component';
import { EnvioFormComponent } from './componentes/envio-form/envio-form.component';
import { EmpresaFormComponent } from './componentes/empresa-form/empresa-form.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PaquetesTableComponent } from './componentes/paquetes-table/paquetes-table.component';
import { TrabajadoresTableComponent } from './componentes/trabajadores-table/trabajadores-table.component';
import { TransporteTableComponent } from './componentes/transporte-table/transporte-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EnviosTableComponent,
    EnvioFormComponent,
    EmpresaFormComponent,
    LoginComponent,
    RegisterComponent,
    PaquetesTableComponent,
    TrabajadoresTableComponent,
    TransporteTableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatIconModule,
    MatToolbarModule, 
    MatMenuModule,
    MatTableModule, 
    MatDialogModule, 
    MatInputModule,
    MatFormFieldModule, 
    MatSnackBarModule, 
    MatTooltipModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
