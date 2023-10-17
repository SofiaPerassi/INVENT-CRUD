import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Empresa } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<any> {
    return this.http.get('http://localhost:3000/empresas')
    .pipe(map((res) => 
    res))
  }

  createEmpresa(newEmpresa: Empresa): Observable<any> {
    return this.http.post('http://localhost:3000/empresas', newEmpresa)
    .pipe(map((res) => res))
  }

  editEmpresa(id: number, data: Empresa): Observable<any> {
    return this.http.put(`http://localhost:3000/empresas/${id}`, data);
  }

  deleteEmpresa(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/empresas/${id}`);
  } 
}
