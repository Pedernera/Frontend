import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {  
  expURL = "http://localhost:8080/explab/"  
  
  constructor(private httpClient: HttpClient, private tokenservice: TokenService) {}

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + "lista");
  }

  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save(exp: Experiencia):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
    return this.httpClient.post<any>(this.expURL + `create`, exp ,{'headers':headers} );
  }

  public update(id: number, exp:Experiencia):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
    return this.httpClient.put<any>(this.expURL + `update/${id}`, exp,{'headers': headers} );
  }

  public delete(id:number):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`,{'headers': headers} );
  }
}
