import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  aceptar = faCheckCircle;
  cancel = faCircleXmark;
  @Output() btnCancel = new EventEmitter();
 

  tituloEdu:string="";
  nomInstituto:string="";
  
  constructor(private eduService: EducacionService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.btnCancel.emit();
  }

  onAceptar(){
    const newEdu : Educacion = new Educacion(this.tituloEdu,this.nomInstituto); 
    this.eduService.save(newEdu).subscribe(data =>{
      console.log(data); 
      this.btnCancel.emit()
    }, err =>{
      console.log(err)
    })
  }
}
