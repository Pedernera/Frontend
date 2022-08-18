import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() btnCancel = new EventEmitter();
  nomSkill:string=''
  porcentaje:number = 0
  nivel:string=''
  categoria:string=''
  color:string=''
  aceptar= faCheckCircle
  cancelar = faCircleXmark
  constructor(private skillService: SkillService) { }

  changeNivel(e:any):void{
    this.nivel = e.target.value
  }
  changeCatgeroria(e:any):void{
    this.categoria = e.target.value
  }

  onAceptar():void{
    const newSkill: skill = new skill(this.nomSkill, this.porcentaje, this.nivel, this.categoria, this.color)
  
    this.skillService.save(newSkill).subscribe(data =>{
      console.log(data)
      this.btnCancel.emit()
    })
  }

  onCancel(){
    this.btnCancel.emit();
  }
  
  ngOnInit(): void {
  }

}
