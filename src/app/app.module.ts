import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {} from '@angular/fire'

import { AppComponent } from './app.component';
import { IniciarsesionComponent } from './componentes/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AddExperienciaComponent } from './componentes/experiencia/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { AddEducacionComponent } from './componentes/educacion/add-educacion/add-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { BarProgressComponent } from './componentes/skill/bar-progress/bar-progress.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AddProyectoComponent } from './componentes/proyectos/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto/edit-proyecto.component';
import { AddSkillComponent } from './componentes/skill/add-skill/add-skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill/edit-skill.component';
@NgModule({
  declarations: [
    AppComponent,
    IniciarsesionComponent,
    InicioComponent,
    NavComponent,
    HomeComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    AddExperienciaComponent,
    EditExperienciaComponent,
    AddEducacionComponent,
    EditEducacionComponent,
    ProyectosComponent,
    SkillComponent,
    ContactoComponent,
    BarProgressComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    AddSkillComponent,
    EditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
