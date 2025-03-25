/*
Crie um sistema que inclua:
Classe Aluno (nome, matrícula, notas, curso)
Métodos: calcularMedia(), adicionarNota()

Classe Escola (nome, listaAlunos, listaProfessores)
Métodos: matricularAluno(), contratarProfessor(), gerarRelatorio()
*/
import entradaDados from 'readline-sync';

class Aluno {
    constructor(){
        this.nomeAluno = entradaDados.question("Digite o nome do(a) Aluno(a): ");
        this.matriculaAluno = entradaDados.question("Digite a matrícula do(a) Aluno(a): ");
        this.cursoMatriculado = entradaDados.question("Qual curso o(a) Aluno(a) esta matriculado: ")
        this.notaAluno = []; // Criando o Array vazio
    }
    // Método para adicionar uma nova nota
    adicionarNota(nota) {
        this.notaAluno.push(nota); // Adiciona a nova nota ao array de notas
    }

    // Método para calcular a média das notas
    calcularMedia() {
        if (this.notaAluno.length === 0) return 0; // Evita divisão por zero
        const soma = this.notaAluno.reduce((total, nota) => total + nota, 0);
        return soma / this.notaAluno.length;
    }
}

// Criando uma instância de Aluno
let aluno1 = new Aluno("João", "123456", "Ciência da Computação");

// Adicionando notas ao aluno
aluno1.adicionarNota(Number(entradaDados.question("Digite a primeira nota: ")));
aluno1.adicionarNota(Number(entradaDados.question("Digite a segunda nota: ")));
aluno1.adicionarNota(Number(entradaDados.question("Digite a terceira nota: ")));
aluno1.adicionarNota(Number(entradaDados.question("Digite a quarta nota: ")));

// Exibindo a média do aluno
console.log("A média do aluno " + aluno1.nomeAluno + " é " + aluno1.calcularMedia());


/* Classe Professor (nome, departamento, disciplinas)
Métodos: atribuirDisciplina(), listarTurmas() */

class Professor {
    constructor(nomeProfessor, departamentoProfessor) {
        this.nomeProfessor = nomeProfessor;
        this.departamentoProfessor = departamentoProfessor;
        this.disciplinasMatriculadas = [];
    }
    atribuirDisciplina(disciplina) {
        if (!disciplina) {
            console.log("Erro: Nenhuma disciplina informada.");
            return;
        }
        this.disciplinasMatriculadas.push(disciplina);
    }
    listarTurmas() {
        if (this.disciplinasMatriculadas.length === 0) {
            console.log("O professor " + this.nomeProfessor + " não tem disciplinas atribuídas.")
        } else {
            console.log("O professor " + this.nomeProfessor + " esta inscrito nas seguintes disciplinas:")
            this.disciplinasMatriculadas.forEach((disciplina, index) => {
                console.log(index + 1 + " " + disciplina);
            });
        }
    }
}

// Criando um professor
let professor1 = new Professor("Douglas", "Departamento de Ciências Exatas");

// Atribuindo disciplinas corretamente
professor1.atribuirDisciplina("Matemática");
professor1.atribuirDisciplina("Física");

// Listando disciplinas
professor1.listarTurmas();


/*
Classe Disciplina (nome, código, alunosMatriculados)
Métodos: matricularAluno(), gerarBoletim()
*/

class Disciplina {
    constructor(nomeDisciplina, codigoDisciplina, alunosMatriculadosDisciplina) {
        this.nomeDisciplina = nomeDisciplina;
        this.codigoDisciplina = codigoDisciplina;
        this.alunosMatriculadosDisciplina = [];
    }
    matricularAluno(aluno) {
        if (!aluno || !aluno.length) {
            console.log("Erro: Aluno inválido");
            return;
        }
        this.alunosMatriculadosDisciplina.push(aluno);
        console.log("Aluno " + aluno.nomeAluno + " está matriculado na disciplina " + this.nomeDisciplina + ".");
    }
    gerarBoletim() {
        if (!this.alunosMatriculadosDisciplina.length) {
            console.log("Nenhum aluno matriculado na disciplina " + this.nomeDisciplina + ".");
            return;
        }



    console.log(`📜 Boletim da disciplina: ${this.nomeDisciplina}`);
    this.alunosMatriculados.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.nomeAluno} - Média: ${aluno.calcularMedia().toFixed(2)}`);
    });
}
}

// Criando instâncias de alunos
let aluno2 = new Aluno("João", "123456", "Ciência da Computação");
let aluno3 = new Aluno("Maria", "789012", "Engenharia");

// Adicionando notas aos alunos
aluno1.adicionarNota(10);
aluno1.adicionarNota(8);
aluno2.adicionarNota(9);
aluno2.adicionarNota(7);

// Criando uma disciplina
let disciplina1 = new Disciplina("Matemática", "MAT101");

// Matriculando alunos na disciplina
disciplina1.matricularAluno(aluno1);
disciplina1.matricularAluno(aluno2);

// Gerando boletim da disciplina
disciplina1.gerarBoletim();