import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Storage, ref, uploadBytes, getDownloadURL} from "@angular/fire/storage";
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';
import { deleteObject } from 'firebase/storage';
@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  @Output() btnCancel = new EventEmitter();
  @Input() editProyecto?:Proyecto;
  aceptar= faCheckCircle
  cancelar = faCircleXmark
  newUrl:string =''
  previewImg=''
  check=false
  titulo:string=''
  descripcion:string=''
  img:any
  urlGithub:string=''
  urlLive:string=''
  constructor(private storage:Storage, private pService: ProyectoService) { }

  ngOnInit(): void {
    if(this.editProyecto){
        this.titulo = this.editProyecto.nomProyecto;
        this.descripcion = this.editProyecto.descripcionPro;
        this.previewImg = this.editProyecto.urlImg;
        this.urlGithub = this.editProyecto.linkGithub;
        if(this.editProyecto.linkLive){
          this.check = true;
          this.urlLive = this.editProyecto.linkLive;
        }
    }
  }

  onCheck(e:any):void{
    this.check = e.target.checked
  }

  modificarImg(event:any):void{
    if(event.target.files.length !== 0){
      this.img = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => 
      this.previewImg = reader.result as string;
      reader.readAsDataURL(event.target.files[0]);
    }
   }
  
  onCancel(){
    this.btnCancel.emit();
  }


  actualizarProyecto(changeImg:boolean):void{
   if(this.editProyecto?.id){
      const newProyecto: Proyecto  = new Proyecto(this.titulo, this.descripcion,
      changeImg? this.img.name : this.editProyecto?.imgProyecto,
      changeImg? this.newUrl : this.previewImg,
      this.urlGithub,this.check ? this.urlLive : null);
      this.pService.update(this.editProyecto?.id,newProyecto).subscribe(data =>{
      console.log(data)
      this.btnCancel.emit()
      })
   }
  }

  onAceptar():void{
    if(this.previewImg !== this.editProyecto?.urlImg){
      const elimImg = ref(this.storage, `imagenes/${this.editProyecto?.imgProyecto}`)
      deleteObject(elimImg)
      const imgRef = ref(this.storage, `imagenes/${this.img.name}`)
      uploadBytes(imgRef, this.img).then(() => {
      getDownloadURL(imgRef).then(url => this.newUrl = url).then( () => {this.actualizarProyecto(true)})
      })
    }else{
      this.actualizarProyecto(false)
    }
  }

}
