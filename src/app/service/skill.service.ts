import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../model/skill';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillUrl="http://localhost:8080/skill/"
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public lista():Observable<skill[]>{
    return this.httpClient.get<skill[]>(this.skillUrl + "lista")
  }

  public save(skil:skill):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenService.getToken()} 
    return this.httpClient.post<any>(this.skillUrl+ `create`, skil,{'headers': headers} );
  }

  public update(id: number,skil:skill):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenService.getToken()} 
    return this.httpClient.put<any>(this.skillUrl + `update/${id}`, skil,{'headers': headers} );
  }

  public delete(id:number):Observable<any>{
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer' + this.tokenService.getToken()} 
    return this.httpClient.delete<any>(this.skillUrl + `delete/${id}`,{'headers': headers} );
  }
}
