import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { faEdit, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: persona = new persona("","","","","");
  isLogged = false;
  editar = false;
  edit = faEdit;
  aceptar = faCheckCircle;
  cancel = faCircleXmark;
  editSobreMi ="";
  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.persona = data;
      this.editSobreMi = this.persona.sobreMi;
    })

    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editarText():void{
      this.editar = !this.editar;
  }

  updatePersona():void{
      this.persona.sobreMi = this.editSobreMi;
      this.personaService.updatePersona(1,this.persona).subscribe(data =>{
        console.log(data)
      })
      this.editarText()
  }
}