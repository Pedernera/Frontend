import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Output() btnCancel = new EventEmitter();
  @Input() editSkill?:skill
  nomSkill:string=''
  porcentaje:number = 0
  nivel:string=''
  categoria:string=''
  color:string=''
  aceptar= faCheckCircle
  cancelar = faCircleXmark
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    if(this.editSkill){
      this.nomSkill = this.editSkill.nomSkill
      this.porcentaje = this.editSkill.porcentaje
      this.nivel = this.editSkill.nivel
      this.categoria = this.editSkill.categoria
      this.color = this.editSkill.color
    }
  }

  changeNivel(e:any):void{
    this.nivel = e.target.value
  }
  changeCatgeroria(e:any):void{
    this.categoria = e.target.value
  }

  onAceptar():void{
      if(this.editSkill?.id){
        const newSkill: skill = new skill(this.nomSkill, this.porcentaje, this.nivel, this.categoria, this.color)
        this.skillService.update(this.editSkill?.id,newSkill).subscribe(data =>{
        console.log(data)
        this.btnCancel.emit()
    })
      }
  }

  onCancel(){
    this.btnCancel.emit();
  }
}
