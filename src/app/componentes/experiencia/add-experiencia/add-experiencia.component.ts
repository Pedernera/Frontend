import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  aceptar = faCheckCircle;
  cancel = faCircleXmark;
  @Output() btnCancel  = new EventEmitter();
  titulo:string='';
  descripcion:string='';
  constructor(private expService: ExperienciaService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.btnCancel.emit()
  }

  onAceptar(){
    const newExp : Experiencia = new Experiencia(this.titulo,this.descripcion); 
    this.expService.save(newExp).subscribe(data =>{
      console.log(data); 
      this.btnCancel.emit()
    }, err =>{
      console.log(err)
    })
  }
}
