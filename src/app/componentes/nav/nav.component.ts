import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faUser, faEnvelope,faGraduationCap, faCheckCircle,faHandshake,faCircleXmark, faLaptopCode, faBarsStaggered, faHome, faArrowRightToBracket, faArrowRightFromBracket, faEdit} from '@fortawesome/free-solid-svg-icons'
import { PersonaService } from 'src/app/service/persona.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  github=faGithub
  linkedin=faLinkedin
  contacto = faEnvelope
  user = faUser
  proyectos = faLaptopCode
  educacion = faGraduationCap
  trabajo = faHandshake
  skill=  faBarsStaggered
  home = faHome
  login = faArrowRightToBracket
  logout = faArrowRightFromBracket
  edit = faEdit
  acept = faCheckCircle;
  cancel = faCircleXmark;

  userEdit = false;
  editImg = false;
  previewImg: String = ''
  img?:any;
  persona: persona = new persona("","","","","")
  constructor(private router: Router, private tokenService: TokenService, private pService: PersonaService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.pService.getPersona().subscribe(data => this.persona = data);
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    if(this.tokenService.getAuthorities().length === 2){
      this.userEdit=true
    }

  }


  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  onLogin(){
    this.router.navigate(['/login'])
  }

 modificarImg(event:any):void{
  if(event.target.files.length !== 0){
    this.img = event.target.files[0]
    this.editImg=true;
    const reader = new FileReader();
    reader.onload = () => 
    this.previewImg = reader.result as string;
    reader.readAsDataURL(event.target.files[0]);
  }
 
 }

 aceptar():void{
  this.persona.img = this.img.name;
  this.pService.updatePersona(1,this.persona).subscribe(data =>{
    console.log(data)
  })
  this.editImg = false;
  this.img=false;
 }
 cancelar():void{
  this.editImg = false;
  this.img=false;
 }
}
