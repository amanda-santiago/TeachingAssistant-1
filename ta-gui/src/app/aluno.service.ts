import { Aluno } from './aluno';

export class AlunoService {
  alunos: Aluno[] = [];
  
  gravar(aluno: Aluno): Aluno {
    var result:any=null;
    if (!this.alunos.find(a => a.cpf == aluno.cpf)) {
      this.alunos.push(aluno);
      result = aluno;
    }
    return result;
  }
}
