import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { faEdit,faPlus,faTrash } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  edit = faEdit;
  elim = faTrash;
  add = faPlus;
  isLogged = false;
  addProyecto = false;
  editProyecto = false;
  constructor(private tokenService: TokenService, private pService: ProyectoService) { }
  proyectos: Proyecto [] = []
  editPro?:Proyecto
  ngOnInit(): void {
    this.cargarProyectos()
    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos():void{
    this.pService.lista().subscribe(data => this.proyectos = data)
  }
  onProyecto():void{
    this.addProyecto = !this.addProyecto;
    this.editProyecto = false
    if(!this.addProyecto){
      this.cargarProyectos()
    }
  }

  onEditProyecto():void{
    this.editProyecto = !this.editProyecto
    this.addProyecto = false
    if(!this.editProyecto){
      this.cargarProyectos()
    }
  }

  editar(pro : Proyecto):void{
    this.editPro = pro
    this.onEditProyecto()
  }

  deleteProyecto(id?:number):void{
    if(id){
      this.pService.delete(id).subscribe(data =>{
        alert('Proyecto borrado')
        this.cargarProyectos()
      },err =>{
        alert('No se puede borrar')
      })
    }
  }

  mostrar():void{
    alert('hmadsa')
  }
}
