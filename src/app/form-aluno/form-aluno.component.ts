import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent {
  @Output() alunoAdicionado = new EventEmitter();
  cursos = ['Redes', 'Microcontroladores e Sistemas Embarcados', 'Linguagens de Programação II', 'Engenharia de Software', 'Sistemas Embarcados', 'Bancos de Dados', 'Empreendedorismo' ];
  salvar(alunoForm) {
    const aluno ={
      'nome': alunoForm.value.nome,
      'idade': alunoForm.value.idade,
      'email': alunoForm.value.email,
      'curso': alunoForm.value.curso
    };
    this.alunoAdicionado.emit(aluno);
  };
}
