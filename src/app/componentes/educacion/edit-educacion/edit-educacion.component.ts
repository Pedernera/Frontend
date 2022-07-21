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
  constructor(private eduService: EducacionService) { }

  ngOnInit(): void {
    if(this.editEdu){
      this.tituloEdu = this.editEdu.tituloEdu;
      this.nomInstituto = this.editEdu.nomInstituto;
    }
  }

  onCancel(){
    this.btnCancel.emit()
  }

  onAceptar(){
    const editEdu : Educacion = new Educacion(this.tituloEdu,this.nomInstituto); 
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
