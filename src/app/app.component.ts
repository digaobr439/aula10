import { Component } from '@angular/core';
import { Aluno } from './model/aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'aula10';
  alunos = [];

  onAdicionarAluno(aluno) {
    this.alunos = [aluno, ...this.alunos];
    console.log(this.alunos);
  };
  obterEstilosParaOCard() {

    return {
      backgroundColor: '#D97E6C'
    }

  }
}
