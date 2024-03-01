import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = 'd3314c20c266355abe362e1a2e9cb816d18c8e8d53e75057bfd0d054b6133463';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
