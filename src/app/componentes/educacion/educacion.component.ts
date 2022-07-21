import { Component, OnInit } from '@angular/core';
import { faEdit,faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edit = faEdit;
  add = faPlus;
  elim = faTrash
  isLogged = false;
  addEducacion=false;
  editEducacion=false;
  educacion: Educacion[]=[];
  editEdu?:Educacion;
  constructor(private tokenService: TokenService, private eduService: EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion()
    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.eduService.lista().subscribe(data => this.educacion =data);
  }

  editar(edu:Educacion):void{
    this.editEdu = edu;
    this.onEditEducacion();
  }

  deleteEdu(id?: number): void{
    if(id){
      this.eduService.delete(id).subscribe(data =>{
        alert('Edu borrado')
        this.cargarEducacion()
      },err =>{
        alert('No se puede borrar')
      })
    }
  }

  onEducacion():void{
    this.addEducacion =!this.addEducacion;
    this.editEducacion = false;
    if(!this.addEducacion){
      this.cargarEducacion()
    }
  }

  onEditEducacion():void{
    this.editEducacion = !this.editEducacion;
    this.addEducacion = false;
    if(!this.editEducacion){
      this.cargarEducacion()
    }
  }

}
