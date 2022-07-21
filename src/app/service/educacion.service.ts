import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduUrl = "http://localhost:8080/edu/"
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduUrl + "lista");
  }

  public detail(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduUrl + `detail/${id}`);
  }

  public save(edu: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.eduUrl + `create`, edu);
  }

  public update(id: number, edu:Educacion):Observable<any>{
    return this.httpClient.put<any>(this.eduUrl + `update/${id}`, edu);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.eduUrl + `delete/${id}`);
  }
}
