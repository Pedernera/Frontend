import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { skill } from 'src/app/model/skill';
import { TokenService } from 'src/app/service/token.service';
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-bar-progress',
  templateUrl: './bar-progress.component.html',
  styleUrls: ['./bar-progress.component.css']
})
export class BarProgressComponent implements OnInit {

  constructor(private tokenService: TokenService) { }
  @Input() skill?: skill;
  @Input() color: string='';
  @Output() delete = new EventEmitter();
  @Output() editar = new EventEmitter();
  edit = faEdit;
  elim = faTrash;
  isLogged=false;
  ngOnInit(): void {
    if (this.tokenService.getAuthorities().length === 2) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editarSkill():void{
      this.editar.emit()
  }

  deleteSkill():void{
      this.delete.emit()
  }
}
