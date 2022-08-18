import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  headers = { 'content-type': 'application/json'} 
  emailUrl = "http://localhost:8080/sendEmail/"
  constructor(private http: HttpClient) { }

  public sendEmail(email:Email):Observable<any>{
    return this.http.post<any>(this.emailUrl + "send", email);
  }
}
