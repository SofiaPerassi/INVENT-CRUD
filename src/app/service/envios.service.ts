import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Envios } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  constructor(private http: HttpClient) { }

  getEnvios(): Observable<any> {
    return this.http.get('http://localhost:3000/envios')
    .pipe(map((res) => 
    res))
  }

  createEnvio(newEnvio: Envios): Observable<any> {
    return this.http.post('http://localhost:3000/envios', newEnvio)
    .pipe(map((res) => res))
  }

  deleteEnvio(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/envios/${id}`);
  }  
}
