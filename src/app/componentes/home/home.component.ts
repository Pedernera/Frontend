import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { faEdit, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persona: persona = new persona("","","","","")
  edit = faEdit;
  isLogged = false;
  editNomApe = false;
  editPosicion = false;
  aceptar = faCheckCircle;
  cancel = faCircleXmark;
  EditNombre = "";
  EditApellido = "";
  EditPos = "";
  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.persona = data;
      this.EditApellido = this.persona.apellido;
      this.EditNombre = this.persona.nombre;
      this.EditPos = this.persona.posicion;
    })

    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  updatePersona():void{
    if(this.editNomApe){
      this.persona.nombre = this.EditNombre;
      this.persona.apellido = this.EditApellido;
      this.personaService.updatePersona(1,this.persona).subscribe(data =>{
        console.log(data)
      })
      this.cancelar('nom-ape')
    }

    if(this.editPosicion){
         this.persona.posicion = this.EditPos;
         this.personaService.updatePersona(1,this.persona).subscribe(data =>{
           console.log(data)
         })
      this.cancelar('pos')
    }
    
  }

  cancelar(value:string):void{
    if(value === 'nom-ape'){
      this.editNomApe = false;
    }else{
      this.editPosicion = false;
    }
  }

  editar(value:string):void{
    if(value === 'nom-ape'){
      this.editNomApe = !this.editNomApe;
      this.editPosicion = false;
    }else{
      this.editNomApe = false;
      this.editPosicion = !this.editPosicion;
    }

  }

}
