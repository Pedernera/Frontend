import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
  URL = 'http://localhost:8080/personas/'

  constructor( private http : HttpClient, private tokenservice: TokenService) { }

  public getPersona(): Observable<persona>{
      return this.http.get<persona>(this.URL + 'traer/perfil')
  }

  public updatePersona(id: number, persona:persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, persona,{'headers': this.headers} );
  }


}
