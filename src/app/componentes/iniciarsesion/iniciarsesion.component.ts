import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!:string;
  roles:string [] = [];
  errMsj!: string;

  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.loginUsuario(this.loginUsuario).subscribe( data => {
        this.isLogged = true;
        this.isLogginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authoritys);
        this.roles= data.authoritys;
        this.router.navigate([''])  
      }, err =>{
        this.isLogged= false;
        this.isLogginFail=true;
        this.errMsj=err.error.mensaje;
        console.log(this.errMsj)
      })
    
  }

  cancelar(){
    this.router.navigate(['/'])
  }

}
