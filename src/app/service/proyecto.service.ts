import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proUrl ="http://localhost:8080/proyectos/"
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proUrl + "lista");
  }

  public save(proy:Proyecto):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenService.getToken()} 
    return this.httpClient.post<any>(this.proUrl + 'create', proy, {'headers':headers})
  }

  public update(id:number, proy: Proyecto):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenService.getToken()}
    return this.httpClient.put<any>(this.proUrl + `update/${id}`,proy,{'headers':headers}) 
  }
  public delete(id:number):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenService.getToken()} 
    return this.httpClient.delete<any>(this.proUrl + `delete/${id}`,{'headers': headers} );
  }
}
