import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { CardAlunoComponent } from './card-aluno/card-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAlunoComponent,
    CardAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
