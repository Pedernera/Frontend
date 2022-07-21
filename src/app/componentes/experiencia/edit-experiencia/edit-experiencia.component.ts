import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  aceptar = faCheckCircle;
  cancel = faCircleXmark;
  @Output() btnCancel  = new EventEmitter();
  @Input() ListExp: Experiencia [] = [];
  @Input() EditExp?:Experiencia;
  titulo:string='';
  descripcion:string ='';
 
  
  constructor(private expService: ExperienciaService) { }

  ngOnInit(): void {
    if(this.EditExp){
      this.titulo = this.EditExp.nombreExp;
      this.descripcion = this.EditExp.descripcionExp;
    }    
  }

  onCancel(){
    this.btnCancel.emit()
  }

  onAceptar(){
    const newExp : Experiencia = new Experiencia(this.titulo,this.descripcion); 
    if(this.EditExp?.id){
      this.expService.update(this.EditExp?.id, newExp).subscribe(data =>{
        console.log(data); 
        this.btnCancel.emit()
      }, err =>{
        console.log(err)
      })
    }
  }

}
