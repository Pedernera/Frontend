import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faUser, faEnvelope,faGraduationCap, faHandshake, faLaptopCode, faBarsStaggered, faHome, faArrowRightToBracket, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
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

  constructor(private router: Router, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  onLogin(){
    this.router.navigate(['/login'])
  }

}
