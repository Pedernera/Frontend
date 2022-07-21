import { Component,OnInit } from '@angular/core';
import { faEdit,faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  edit = faEdit;
  add = faPlus;
  elim = faTrash;
  isLogged = false;
  addExperiencia = false;
  editExperiencia = false;
  experiencias : Experiencia [] =[];
  editExp?:Experiencia;
  constructor(private tokenService: TokenService, private expService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onExperiencia():void{
    this.addExperiencia =!this.addExperiencia;
    this.editExperiencia = false;
    if(!this.addExperiencia){
      this.cargarExperiencia()
    }
  }

  onEditExperiencia():void{
    this.editExperiencia = !this.editExperiencia;
    this.addExperiencia = false;
    if(!this.editExperiencia){
      this.cargarExperiencia()
    }
  }

  cargarExperiencia(): void {
    this.expService.lista().subscribe(data => this.experiencias =data);
  }

  editar(exp:Experiencia):void{
    this.editExp = exp;
    this.onEditExperiencia();
  }

  deleteExp(id?: number): void{
    if(id){
      this.expService.delete(id).subscribe(data =>{
        alert('Exp borrado')
        this.cargarExperiencia()
      },err =>{
        alert('No se puede borrar')
      })
    }
  }

}
