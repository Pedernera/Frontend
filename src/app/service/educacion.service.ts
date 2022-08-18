import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduUrl = "http://localhost:8080/edu/"
  constructor(private httpClient: HttpClient, private tokenservice: TokenService ) { }

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduUrl + "lista");
  }

  public detail(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduUrl + `detail/${id}`);
  }

  public save(edu: Educacion):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
    return this.httpClient.post<any>(this.eduUrl + `create`, edu,{'headers': headers} );
  }

  public update(id: number, edu:Educacion):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
    return this.httpClient.put<any>(this.eduUrl + `update/${id}`, edu,{'headers': headers} );
  }

  public delete(id:number):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenservice.getToken()} 
    return this.httpClient.delete<any>(this.eduUrl + `delete/${id}`,{'headers': headers} );
  }
}
