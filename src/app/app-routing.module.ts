import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './componentes/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';



const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'login',component: IniciarsesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
