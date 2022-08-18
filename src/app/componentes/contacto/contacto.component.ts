import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  emisor : string= '';
  mensaje : string= '';
  nombre : string = '';
  email: Email = new Email('','');
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  enviarEmail(){
    this.email.emisor =this.emisor;
    this.email.mensaje=`${this.nombre}  
    Contacto: ${this.emisor}
    Mensaje:
    ${this.mensaje}`
    
    this.emailService.sendEmail(this.email).subscribe(data =>console.log(data));
    console.log(this.emisor, this.mensaje)
  }
}
