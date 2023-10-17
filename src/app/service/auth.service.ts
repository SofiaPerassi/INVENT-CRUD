import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authenticatedUser: any = null;

  constructor(private http: HttpClient) {}

  login(nombre: string, password: string): Observable<boolean> {
    // Make a GET request to fetch the list of users
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios').pipe(
      map((users: any[]) => {
        const user = users.find((u) => u.nombre === nombre && u.contraseña === password);
        if (user) {
          this.isAuthenticated = true;
          this.authenticatedUser = user;
        }
        return !!user;
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.authenticatedUser = null;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getAuthenticatedUser(): any {
    return this.authenticatedUser;
  }
}
