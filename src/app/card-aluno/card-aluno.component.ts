import { Component, Input} from '@angular/core';
import {Aluno} from '../model/aluno';

@Component({
  selector: 'app-card-aluno',
  templateUrl: './card-aluno.component.html',
  styleUrls: ['./card-aluno.component.css']
})
export class CardAlunoComponent{
  @Input() aluno;

}
