import entradaDados from 'readline-sync';

// Classe Aluno
class Aluno {
    constructor() {
        this.nomeAluno = entradaDados.question("Digite o nome do(a) Aluno(a): ");
        this.matriculaAluno = entradaDados.question("Digite a matrícula do(a) Aluno(a): ");
        this.notaAluno = [];
    }

    adicionarNota(nota) {
        this.notaAluno.push(nota);
    }

    calcularMedia() {
        if (this.notaAluno.length === 0) return 0;
        const soma = this.notaAluno.reduce((total, nota) => total + nota, 0);
        return soma / this.notaAluno.length;
    }
}

// Classe Professor
class Professor {
    constructor() {
        this.nomeProfessor = entradaDados.question("Digite o nome do professor: ");
        this.departamentoProfessor = entradaDados.question("Digite o departamento do professor: ");
        this.disciplinasMinistradas = [];
    }

    atribuirDisciplina(disciplina) {
        if (!disciplina) {
            console.log("Erro: Nenhuma disciplina informada.");
            return;
        }
        this.disciplinasMinistradas.push(disciplina);
    }

    listarTurmas() {
        if (this.disciplinasMinistradas.length === 0) {
            console.log(`O professor ${this.nomeProfessor} não tem disciplinas atribuídas.`);
        } else {
            console.log(`O professor ${this.nomeProfessor} está ensinando:`);
            this.disciplinasMinistradas.forEach((disciplina, index) => {
                console.log(`${index + 1}. ${disciplina.nomeDisciplina}`);
            });
        }
    }
}

// Classe Disciplina
class Disciplina {
    constructor(nomeDisciplina, codigoDisciplina) {
        this.nomeDisciplina = nomeDisciplina;
        this.codigoDisciplina = codigoDisciplina;
        this.alunosMatriculados = [];
    }

    matricularAluno(aluno) {
        if (!aluno) {
            console.log("Erro: Aluno inválido.");
            return;
        }
        this.alunosMatriculados.push(aluno);
        console.log(`Aluno ${aluno.nomeAluno} matriculado na disciplina ${this.nomeDisciplina}.`);
    }

    gerarBoletim() {
        if (this.alunosMatriculados.length === 0) {
            console.log(`Nenhum aluno matriculado na disciplina ${this.nomeDisciplina}.`);
            return;
        }

        console.log(`📜 Boletim da disciplina: ${this.nomeDisciplina}`);
        this.alunosMatriculados.forEach((aluno, index) => {
            console.log(`${index + 1}. ${aluno.nomeAluno} - Média: ${aluno.calcularMedia().toFixed(2)}`);
        });
    }
}

// Classe Escola
class Escola {
    constructor(nome) {
        this.nome = nome;
        this.listaAlunos = [];
        this.listaProfessores = [];
        this.listaDisciplinas = [];
    }

    matricularAluno() {
        let novoAluno = new Aluno();
        this.listaAlunos.push(novoAluno);
        console.log(`Aluno ${novoAluno.nomeAluno} matriculado com sucesso!\n`);
    }

    contratarProfessor() {
        let novoProfessor = new Professor();
        this.listaProfessores.push(novoProfessor);
        console.log(`Professor(a) ${novoProfessor.nomeProfessor} contratado(a) com sucesso!\n`);
    }

    criarDisciplina() {
        let nomeDisciplina = entradaDados.question("Digite o nome da disciplina: ");
        let codigoDisciplina = entradaDados.question("Digite o código da disciplina: ");
        let novaDisciplina = new Disciplina(nomeDisciplina, codigoDisciplina);
        this.listaDisciplinas.push(novaDisciplina);
        console.log(`Disciplina ${nomeDisciplina} criada com sucesso!\n`);
    }

    gerarRelatorio() {
        console.log("\n=== RELATÓRIO DA ESCOLA ===");
        console.log(`Escola: ${this.nome}\n`);

        console.log("📌 Alunos Matriculados:");
        if (this.listaAlunos.length === 0) {
            console.log("Nenhum aluno matriculado.");
        } else {
            this.listaAlunos.forEach((aluno, index) => {
                console.log(`${index + 1}. ${aluno.nomeAluno}`);
            });
        }

        console.log("\n👨‍🏫 Professores Contratados:");
        if (this.listaProfessores.length === 0) {
            console.log("Nenhum professor contratado.");
        } else {
            this.listaProfessores.forEach((professor, index) => {
                console.log(`${index + 1}. ${professor.nomeProfessor} - ${professor.departamentoProfessor}`);
            });
        }

        console.log("\n📖 Disciplinas Cadastradas:");
        if (this.listaDisciplinas.length === 0) {
            console.log("Nenhuma disciplina cadastrada.");
        } else {
            this.listaDisciplinas.forEach((disciplina, index) => {
                console.log(`${index + 1}. ${disciplina.nomeDisciplina} (Código: ${disciplina.codigoDisciplina})`);
            });
        }
    }
}

// Criando uma instância da escola
let minhaEscola = new Escola("Escola Modelo");

// Menu interativo
let continuar = true;
while (continuar) {
    console.log("\n=== MENU DA ESCOLA ===");
    console.log("1. Matricular Aluno");
    console.log("2. Contratar Professor");
    console.log("3. Criar Disciplina");
    console.log("4. Gerar Relatório");
    console.log("5. Sair");
    
    let escolha = Number(entradaDados.question("Escolha uma opção: "));

    switch (escolha) {
        case 1:
            minhaEscola.matricularAluno();
            break;
        case 2:
            minhaEscola.contratarProfessor();
            break;
        case 3:
            minhaEscola.criarDisciplina();
            break;
        case 4:
            minhaEscola.gerarRelatorio();
            break;
        case 5:
            continuar = false;
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}