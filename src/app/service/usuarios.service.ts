import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios')
    .pipe(map((res) => 
    res))
  }
 
}
