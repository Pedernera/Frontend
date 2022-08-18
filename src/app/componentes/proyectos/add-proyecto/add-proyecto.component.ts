import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {faCheckCircle, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { Storage, ref, uploadBytes, getDownloadURL} from "@angular/fire/storage";
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Proyecto } from 'src/app/model/proyecto';
@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  @Output() btnCancel = new EventEmitter();
  aceptar= faCheckCircle
  cancelar = faCircleXmark
  previewImg=''
  check=false
  titulo:string=''
  descripcion:string=''
  img:any
  urlGithub:string=''
  urlLive:string=''
  constructor(private storage:Storage, private pService: ProyectoService) { }

  ngOnInit(): void {
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

  onAceptar():void{
    const imgRef = ref(this.storage, `imagenes/${this.img.name}`)
    uploadBytes(imgRef,this.img).then(res => {
      getDownloadURL(imgRef).then(url => {
        const newProyecto: Proyecto  = new Proyecto(this.titulo, this.descripcion,this.img.name,url,this.urlGithub,this.check ? this.urlLive : null);
        this.pService.save(newProyecto).subscribe(data =>{
          console.log(data)
          this.btnCancel.emit()
        })
      })
    })
  }
}
