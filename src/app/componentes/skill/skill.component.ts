import { Component, OnInit } from '@angular/core';
import { skill } from 'src/app/model/skill';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: boolean = false
  front: skill [] = []
  back: skill [] = []
  soft: skill [] = []
  add = faPlus;
  isLogged=false;
  addSkill= false;
  editSkill=false;
  skillEdit?:skill
  constructor(private tokenService: TokenService, private skillService: SkillService) { }

  ngOnInit(): void {
    this.cargarSkill()
    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editar(skil : skill):void{
    this.skillEdit = skil
    this.onEditSkill()
  }

  deleteSkill(id?:number):void{
    if(id){
      this.skillService.delete(id).subscribe(data =>{
        console.log(data)
        this.cargarSkill()
      })
    }
  }
  cargarSkill():void{
    this.skillService.lista().subscribe(data => {
      if(data.length > 0){
        this.skills = true;
        this.front = data.filter(d => d.categoria === 'frontend')
        this.back = data.filter(d => d.categoria === 'backend')
        this.soft = data.filter(d => d.categoria === 'soft')
      }
    })
  }
  onAddSkill():void{
    this.addSkill = !this.addSkill;
    this.editSkill = false
    if(!this.addSkill){
      this.cargarSkill()
    }
  }

  onEditSkill():void{
    this.editSkill = !this.editSkill
    this.addSkill = false
    if(!this.editSkill){
      this.cargarSkill()
    }
  }

}
