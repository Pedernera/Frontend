import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  aceptar = faCheckCircle;
  cancel = faCircleXmark;
  @Output() btnCancel = new EventEmitter();
  @Input() editEdu?:Educacion;
 
  tituloEdu:string="";
  nomInstituto:string="";
  fechaInicial?: Date
  fechaFinal?: Date
  check= false
  constructor(private eduService: EducacionService) { }

  ngOnInit(): void {
    if(this.editEdu){
      this.tituloEdu = this.editEdu.tituloEdu;
      this.nomInstituto = this.editEdu.nomInstituto;
      this.fechaInicial = this.editEdu.fechaInicioEdu;
      this.fechaFinal = this.editEdu.fechaFinalEdu
      this.check = this.editEdu.fechaFinalEdu ? false : true
    }
  }

  onCancel(){
    this.btnCancel.emit()
  }

  onCkeck(e:any):void{
    this.check = e.target.checked
  }
  onAceptar(){
    if(this.fechaInicial && this.check){
    const editEdu : Educacion = new Educacion(this.tituloEdu,this.nomInstituto, this.fechaInicial, null); 
    if(this.editEdu?.id){
      this.eduService.update(this.editEdu?.id, editEdu).subscribe(data =>{
        console.log(data); 
        this.btnCancel.emit()
      }, err =>{
        console.log(err)
      })
    }
    }  
    if(this.fechaInicial && this.fechaFinal){
      const editEdu : Educacion = new Educacion(this.tituloEdu,this.nomInstituto, this.fechaInicial, this.fechaFinal); 
    if(this.editEdu?.id){
      this.eduService.update(this.editEdu?.id, editEdu).subscribe(data =>{
        console.log(data); 
        this.btnCancel.emit()
      }, err =>{
        console.log(err)
      })
    }
    }
    
  }
}
