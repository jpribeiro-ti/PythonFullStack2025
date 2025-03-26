import entradaDados from 'readline-sync';

// Classe Aluno
class Aluno { // A classe Aluno é criada para representar cada aluno dentro do sistema
    constructor() { // método construtor, para iniciar a função
        this.nomeAluno = entradaDados.question("\nDigite o nome do(a) Aluno(a): "); // Solicita que o usuário digite o nome do ALuno
        this.matriculaAluno = this.gerarMatricula(); // Chama o método para gerar matrícula automaticamente
        this.notaAluno = []; // Esta linha inicializa a propriedade notaAluno como um array vazio. Esse array será usado para armazenar referências a notas do alunos
        this.disciplinasMatriculadas = []; // Inicializa a propriedade disciplinasMatriculadas como um array vazio. Este array armazenará as disciplinas em que o aluno está matriculado
    }

    adicionarNota(nota) { // Este é um método que permite adicionar uma nota ao array notaAluno
        this.notaAluno.push(nota); // A nota fornecida como argumento é adicionada ao array notaAluno usando o método push, permitindo que as notas do aluno sejam acumuladas à medida que ele é avaliado nas disciplinas
    }

    calcularMedia() { // Nota Aluno é um Array
        if (this.notaAluno.length === 0) return 0; // Se o total de nota for igual a zero
        const soma = this.notaAluno.reduce((total, nota) => total + nota, 0); // Este é um método de array que executa uma função fornecida em cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor (somando os números)
        // (total, nota): total é o acumulador que armazena o valor total até aquele ponto, e nota é o elemento atual do array que está sendo processado.
        // total + nota: Esta expressão soma o valor acumulado (total) com a nota atual (nota)
        return soma / this.notaAluno.length; // A soma total das notas é dividida pelo número de notas. O resultado dessa divisão é a média das notas
    }

    matricularNaDisciplina(disciplina) { // Método matricularNaDisciplina e a (disciplina é o parâmetro)
        if (!disciplina) { // Se o parâmetro for falso, o código do erro será executado
            console.log("Erro: Disciplina inválida.");
            return; // Essa linha encerra a execução da função, impedindo que o código abaixo dela seja executado
        }
        this.disciplinasMatriculadas.push(disciplina); // Se a disciplina é válida, esta linha adiciona a disciplina ao array disciplinasMatriculadas do aluno (representado por this). Isso significa que o aluno agora está matriculado nessa disciplina
        disciplina.matricularAluno(this); // Esta linha chama o método matricularAluno do objeto disciplina, passando o próprio aluno como argumento (this). Essa ação normalmente indica que a disciplina também está atualizando seu registro para incluir o novo aluno matriculado
    }

    gerarMatricula() {
        const anoAtual = new Date().getFullYear(); // Obtém o ano atual
        const digitosAleatorios = Math.floor(100 + Math.random() * 900); // Gera um número aleatório entre 100 e 999
        return `${anoAtual}${digitosAleatorios}`; // Retorna a matrícula no formato "AAAAAAA"
    }

    gerarBoleto() { // Método gerarBoleto
        const valorMensalidade = 500.00; // Constante com o valor fixo da mensalidade
        const dataVencimento = "10/04/2024"; // Constante com Data fixada
        console.log(`\n💰 BOLETO GERADO PARA ${this.nomeAluno}`); // Mensagem na saída do console indicando que um boleto foi gerado para um aluno específico. A propriedade nomeAluno busca o Dado Armazenado com o nome estudante na Função Aluno
        console.log(`Valor: R$${valorMensalidade.toFixed(2)}`); // Valor da mensalidade é impresso no console, formatado para dois dígitos decimais, usando o método toFixed(2)
        console.log(`Vencimento: ${dataVencimento}`); //Esta linha imprime a data de vencimento do boleto na Constante DataVencimento.
        console.log("Código de barras: 1234.5678.9101.1121\n"); // Simulando o código de Barras
    }
}

// Classe Professor
class Professor { // Classe Professor
    constructor() { // Iniciar a função
        this.nomeProfessor = entradaDados.question("\nDigite o nome do professor: "); // Variável recebendo o nome do Professor (Similar ao Input)
        this.departamentoProfessor = entradaDados.question("Digite o departamento do professor: ");  // Variável recebendo o departamento do Professor (Similar ao Input)
        this.disciplinasMinistradas = []; // Array com as turmas que o professor leciona
    }

    atribuirDisciplina(disciplina) { // Método atribuirDisciplina com o parâmetro disciplina
        if (!disciplina) { // Se o parâmetro for falso, o código do erro será executado
            console.log("Erro: Nenhuma disciplina informada."); // Mensagem de Erro
            return; // Essa linha encerra a execução do método, impedindo que o código abaixo dela seja executado
        }
        this.disciplinasMinistradas.push(disciplina); // Se a confirmação é válida, esta linha adiciona ao Array disciplinaMinistradas ao Professor no array disciplinasMinistradas do professor (representado por this). Isso significa que o professor agora está matriculado para lecionar essa matéria
        console.log(`Professor ${this.nomeProfessor} agora leciona ${disciplina.nomeDisciplina}`); // Mensagem na tela de confirmação que o Professor agora Leciona essa materia
    }
}

// Classe Disciplina
class Disciplina {  // Classe Disciplina
    constructor(nomeDisciplina, codigoDisciplina) { // Iniciando a função, com os parâmetros nomeDisciplina, codigoDisciplina
        this.nomeDisciplina = nomeDisciplina; // A propriedade nomeDisciplina do objeto atual é definida com o valor do parâmetro nomeDisciplina. Essa propriedade armazena o nome da disciplina, permitindo identificar qual disciplina a instância representa
        this.codigoDisciplina = codigoDisciplina; // A propriedade codigoDisciplina do objeto atual é definida com o valor do parâmetro codigoDisciplina. Essa propriedade armazena o codigo da disciplina, permitindo identificar qual disciplina a instância representa
        this.alunosMatriculados = []; // Esta linha inicializa a propriedade alunosMatriculados como um array vazio. Esse array será usado para armazenar referências a alunos que estão matriculados nessa disciplina
    }

    matricularAluno(aluno) { // O método é chamado com um argumento, aluno, que deve ser um objeto representando um aluno que se deseja matricular na disciplina
        if (!aluno) { // Se for falso a próxima linha com o Erro será executado
            console.log("Erro: Aluno inválido.");
            return; // Return encerra a execução do método
        }
        this.alunosMatriculados.push(aluno); // Se a confirmação é válida, esta linha adiciona ao Array alunosMatriculados, que contém todos os alunos que estão atualmente matriculados nessa disciplina
        console.log(`Aluno ${aluno.nomeAluno} matriculado na disciplina ${this.nomeDisciplina}.`); // Mensagem confirmando que o aluno foi matriculado
    }

    gerarBoletim() { // O método gerarBoletim pertence à classe Disciplina e tem a função de gerar um boletim que lista os alunos matriculados na disciplina, juntamente com suas médias
        if (this.alunosMatriculados.length === 0) { // Esta linha verifica se a propriedade alunosMatriculados, que é um array contendo os alunos matriculados na disciplina. Se o comprimento do array for 0, significa que não há alunos matriculados
            console.log(`Nenhum aluno matriculado na disciplina ${this.nomeDisciplina}.`);
            return; // Return encerra a execução do método
        }

        console.log(`📜 Boletim da disciplina: ${this.nomeDisciplina}`); // Se houver alunos matriculados, a Mensagem é impressa
        this.alunosMatriculados.forEach((aluno, index) => { // A função forEach é usada para iterar sobre cada aluno no array alunosMatriculados. Para cada iteração, o aluno atual e seu index (posição no array) são passados para a função de callback
            console.log(`${index + 1}. ${aluno.nomeAluno} - Média: ${aluno.calcularMedia().toFixed(2)}`); // Dentro do loop, uma linha é impressa no console para cada aluno, mostrando sua posição na lista (com index + 1 para que a contagem comece em 1), o nome do aluno e sua média. A média é calculada pelo método calcularMedia() do objeto aluno e formatada com duas casas decimais usando toFixed(2)
        });
    }
}

// Classe Escola
class Escola { // Essa Classe ajuda a organizar e gerenciar Aluno, Professor e Disciplina dentro do App
    constructor(nome) { // O construtor é um método especial que é chamado quando uma nova instância da classe Escola
        this.nome = nome; // Armazena o nome da escola
        this.listaAlunos = []; // Inicia um Array Vazio que será usado para armazenar objetos de alunos matriculados na escola
        this.listaProfessores = []; // Inicia um Array vazio que será usado para armazenar objetos de Professores contratados
        this.listaDisciplinas = []; // Inicia um Array vazio que será usado para armazenas disciplinas oferecidas pela escola
    }

    matricularAluno() { // Método responsável por matricular o Aluno
        let novoAluno = new Aluno(); // Uma nova instância da classe Aluno é criada, a classe Aluno tem um construtor que coleta informações do aluno
        this.listaAlunos.push(novoAluno); // A nova instância do aluno (novoAluno) é adicionada ao array listaAlunos
        console.log(`\nAluno ${novoAluno.nomeAluno} matriculado com sucesso!\n`); // Após a matrícula, uma mensagem é impressa no console confirmando que o aluno foi matriculado com sucesso
    }

    contratarProfessor() { // Método responsável por contratar o Professor
        let novoProfessor = new Professor(); // Uma nova instância da classe Professor é criada, a classe Professor tem um construtor que coleta informações do aluno
        this.listaProfessores.push(novoProfessor); // A nova instância do professor (novoProfessor) é adicionada ao array listaProfessores
        console.log(`\nProfessor(a) ${novoProfessor.nomeProfessor} contratado(a) com sucesso!\n`); // Após a matrícula, uma mensagem é impressa no console confirmando que o professor foi contratado com sucesso
    }

    criarDisciplina() { // Método responsável por criar a disciplina e adicioná-la a lista de disciplina da escola
        let nomeDisciplina = entradaDados.question("\nDigite o nome da disciplina: "); // A função entradaDados.question é responsavel pela entrada de Dados (similar ao Input)
        //let codigoDisciplina = entradaDados.question("Digite o código da disciplina: "); // A função entradaDados.question é responsavel pela entrada de Dados (similar ao Input)
        let codigoDisciplina= this.gerarCodigoDisciplina(); // Gerar código automatico da disciplina
        let novaDisciplina = new Disciplina(nomeDisciplina, codigoDisciplina); // Nova instância da classe Disciplina é criada, utilizando os nomes e códigos fornecidos. A nova instância é armazenada na variável novaDisciplina
        this.listaDisciplinas.push(novaDisciplina); // Adiciona a nova disciplina ao array listaDisciplinas, que faz parte da classe Escola e armazena todas as disciplinas criadas na escola
        console.log(`\nDisciplina ${nomeDisciplina} codigo disciplina ${codigoDisciplina} criada com sucesso!\n`); // Uma confirmação de disciplina criada com sucesso
    }

    gerarCodigoDisciplina() {
        const anoAtual = new Date().getFullYear(); // Obtém o ano atual
        const digitosAleatorios1 = Math.floor(100 + Math.random() * 900); // Gera um número aleatório entre 100 e 999
        return `Dg${digitosAleatorios1}`; // Retorna a matrícula no formato "DgXXX"
    }


    gerarRelatorio() { // O método gerarRelatorio é responsável por imprimir um relatório completo da escola, que inclui informações sobre alunos matriculados, professores contratados e disciplinas cadastradas
        console.log("\n=== RELATÓRIO DA ESCOLA ==="); // Cabeçalho indicando o inicio do relatório
        console.log(`Escola: ${this.nome}\n`); // Exibe o nome da escola acessando a propriedade nome da instância escola

        console.log("📌 Alunos Matriculados:"); // Exibe o texto Alunos Matriculados
        if (this.listaAlunos.length === 0) { // Condição que verifica se não há alunos matriculados. Se a lista estiver vazia, imprime uma mensagem informando isso
            console.log("Nenhum aluno matriculado."); // Se a condição for verdadeira imprime na tela
        } else { // caso contrário
            this.listaAlunos.forEach((aluno, index) => { // Se houver alunos, um loop forEach é usado para percorrer cada aluno - A função forEach é usada para iterar sobre cada aluno no array listaALunos. Para cada iteração, o aluno atual e seu index (posição no array) são passados para a função de callback
                console.log(`${index + 1}. ${aluno.nomeAluno} - Turmas: ${aluno.disciplinasMatriculadas.map(d => d.nomeDisciplina).join(", ") || "Nenhuma"}`); // Exibe a posição do aluno na lista, o nome do aluno e as turmas (disciplinas) nas quais ele está matriculado. A função map é usada para extrair os nomes das disciplinas, e join as conecta em uma única string. Se o aluno não estiver matriculado em nenhuma turma, imprime "Nenhuma"
            });
        }

        console.log("\n👨‍🏫 Professores Contratados:"); //  Imprime o título para a seção de professores
        if (this.listaProfessores.length === 0) { // Condição que verifica se não há professores matriculados. Se a lista estiver vazia, imprime uma mensagem informando isso
            console.log("Nenhum professor contratado.");
        } else { // caso contrário
            this.listaProfessores.forEach((professor, index) => { // Se houver alunos, um loop forEach é usado para percorrer cada aluno - A função forEach é usada paa iterar sobre cada aluno no array listaProfessores. Para cada iteração, o professor atual e seu index (posição no array) sçao passados para a função de callback
                console.log(`${index + 1}. ${professor.nomeProfessor} - Departamento: ${professor.departamentoProfessor} - Turmas: ${professor.disciplinasMinistradas.map(d => d.nomeDisciplina).join(", ") || "Nenhuma"}`);  // Se existir, um forEach é utilizado para listar cada professor, incluindo o nome, o departamento e as disciplinas que lecionam. A função map é usada para extrair os nomes das disciplinas, e join as conecta em uma única string. Se o professor não estiver matriculado em nenhuma turma, imprime "Nenhuma"
            });
        }

        console.log("\n📖 Disciplinas Cadastradas:"); // Imprime o texto
        if (this.listaDisciplinas.length === 0) { // Verifica se a lista esta vazia, se for true, imprime nenhuma disciplina cadastrada
            console.log("Nenhuma disciplina cadastrada.");
        } else { // caso contrario
            this.listaDisciplinas.forEach((disciplina, index) => { // Se a lista existir, um forEach é utilizado para listar cada professor, incluindo o nome, o departamento e as disciplinas que lecionam
                console.log(`${index + 1}. ${disciplina.nomeDisciplina} (Código: ${disciplina.codigoDisciplina}) - Alunos: ${disciplina.alunosMatriculados.length}`);
            });
        }
    }
}

// Criando uma instância da escola
let minhaEscola = new Escola("  - ### Escola Aprendendo com o professor Douglas ### -  "); // Cria uma nova instância da classe Escola, nomeando-a de "Escola Aprendendo com o professor Douglas". Essa instância irá armazenar informações sobre alunos, professores e disciplinas

// Menu interativo
let continua = true; // Esta linha inicializa uma variável booleana continua e a define como true. Essa variável será usada para controlar o loop, permitindo que ele continue a executar até que uma condição específica altere seu valor para false
while (continua) { // Este é um loop que continua a executar enquanto a condição continua for verdadeira. Isso permite que o menu seja apresentado repetidamente ao usuário até que ele escolha sair
    console.log("\n=== MENU DA ESCOLA ==="); // Dentro do loop, várias opções são impressas no console, apresentadas como um menu. Cada opção corresponde a uma função do programa
    console.log("1. Matricular Aluno");
    console.log("2. Contratar Professor");
    console.log("3. Criar Disciplina");
    console.log("4. Gerar Relatório");
    console.log("5. Matricular Aluno em Disciplina");
    console.log("6. Professor Lecionar Disciplina");
    console.log("7. Gerar Boleto do Aluno");
    console.log("8. Sair");

    let escolha = Number(entradaDados.question("\nEscolha uma opcao: ")); // entrada do usuário para escolher uma opção do menu. O método entradaDados.question() captura a resposta do usuário (presumivelmente da linha de comandos). O valor retornado é convertido para um número usando Number(...) para que possa ser usado no switch
    
    switch (escolha) { // Um switch é utilizado para executar um bloco de código específico com base na escolha do usuário
        case 1: // Se o usuário escolher 1, o método matricularAluno() da instância da escola (minhaEscola) é chamado, permitindo ao usuário matricular um novo aluno
            minhaEscola.matricularAluno(); // Minha escola é uma instancia da classe Escola, matricularAluno é o método que matricula o Aluno
            break;
        case 2: // Chama o método contratarProfessor() da instância minhaEscola
            minhaEscola.contratarProfessor(); // Permite que um novo professor seja adicionado à escola
            break;
        case 3: // Chama o método criarDisciplina()
            minhaEscola.criarDisciplina(); // Cria uma nova disciplina e a adiciona à lista de disciplinas da escola
            break;
        case 4: // Chama o método gerarRelatorio()
            minhaEscola.gerarRelatorio(); // Gera e exibe um relatório contendo informações sobre alunos, professores e disciplinas
            break;
        case 5: { // Matricular Aluno em Disciplina
            // Exibe a lista de alunos cadastrados
            console.log("\n📚 Alunos Cadastrados:");
            if (minhaEscola.listaAlunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
                break;
            } else {
                minhaEscola.listaAlunos.forEach((aluno, index) => {
                    console.log(`${index + 1}. ${aluno.nomeAluno}`);
                });
            }
        
            // Solicita que o usuário escolha o aluno
            let alunoEscolhido = Number(entradaDados.question("Escolha o número do aluno para matrícula na disciplina: "));
            if (alunoEscolhido < 1 || alunoEscolhido > minhaEscola.listaAlunos.length) {
                console.log("Opcao de aluno invalida!");
                break;
            }
            
            let aluno = minhaEscola.listaAlunos[alunoEscolhido - 1]; // Seleciona o aluno escolhido
        
            // Exibe a lista de disciplinas disponíveis
            console.log("\n📖 Disciplinas Cadastradas:");
            if (minhaEscola.listaDisciplinas.length === 0) {
                console.log("Nenhuma disciplina cadastrada.");
                break;
            } else {
                minhaEscola.listaDisciplinas.forEach((disciplina, index) => {
                    console.log(`${index + 1}. ${disciplina.nomeDisciplina}`);
                });
            }
            
            // Solicita que o usuário escolha a disciplina
            let disciplinaEscolhida = Number(entradaDados.question("Escolha o número da disciplina em que o aluno será matriculado: "));
            if (disciplinaEscolhida < 1 || disciplinaEscolhida > minhaEscola.listaDisciplinas.length) {
                console.log("Opção de disciplina inválida!");
                break;
            }
        
            let disciplina = minhaEscola.listaDisciplinas[disciplinaEscolhida - 1]; // Seleciona a disciplina escolhida
        
            // Matricula o aluno na disciplina escolhida
            aluno.matricularNaDisciplina(disciplina); // Chama o método para matricular o aluno na disciplina
            break;
        }

        case 6: { // Professor Lecionar Disciplina
            // Exibe a lista de professores disponíveis
            console.log("\n👨‍🏫 Professores Cadastrados:");
            if (minhaEscola.listaProfessores.length === 0) {
                console.log("Nenhum professor cadastrado.");
                break;
            } else {
                minhaEscola.listaProfessores.forEach((professor, index) => {
                    console.log(`${index + 1}. ${professor.nomeProfessor}`);
                });
            }
        
            // Solicita que o usuário escolha o professor
            let professorEscolhido = Number(entradaDados.question("Escolha o número do professor: "));
            if (professorEscolhido < 1 || professorEscolhido > minhaEscola.listaProfessores.length) {
                console.log("Opção de professor inválida!");
                break;
            }
            
            let professor = minhaEscola.listaProfessores[professorEscolhido - 1]; // Seleciona o professor escolhido
        
            // Exibe a lista de disciplinas disponíveis
            console.log("\n📖 Disciplinas Cadastradas:");
            if (minhaEscola.listaDisciplinas.length === 0) {
                console.log("Nenhuma disciplina cadastrada.");
                break;
            } else {
                minhaEscola.listaDisciplinas.forEach((disciplina, index) => {
                    console.log(`${index + 1}. ${disciplina.nomeDisciplina}`);
                });
            }
            
            // Solicita que o usuário escolha a disciplina
            let disciplinaEscolhida = Number(entradaDados.question("Escolha o número da disciplina que o professor lecionará: "));
            if (disciplinaEscolhida < 1 || disciplinaEscolhida > minhaEscola.listaDisciplinas.length) {
                console.log("Opção de disciplina inválida!");
                break;
            }
        
            let disciplina = minhaEscola.listaDisciplinas[disciplinaEscolhida - 1]; // Seleciona a disciplina escolhida
        
            // Atribui a disciplina ao professor
            professor.atribuirDisciplina(disciplina);
            
            console.log(`Professor ${professor.nomeProfessor} agora leciona ${disciplina.nomeDisciplina}.`);
            break;
        }
/*
        case 6: { // Professor Lecionar Disciplina
            let nomeProfessor = entradaDados.question("\nNome do professor: "); // O usuário é solicitado a inserir o nome do professor
            let professor = minhaEscola.listaProfessores.find(p => p.nomeProfessor === nomeProfessor); // Busca o nome do professor na listaProfessores
            
            if (!professor) { // Se a lista for vazia, imprime Professor não encontrado
                console.log("Professor não encontrado!");
                break;
            }
            
            let nomeAluno = entradaDados.question("Nome do aluno para gerar boleto: "); // O usuário é solicitado a inserir o nome do Aluno para gerar o boleto
            let aluno = minhaEscola.listaAlunos.find(a => a.nomeAluno === nomeAluno); // Busca o nome do aluno na listaAlunos
            
            if (!aluno) { // Se a lista não existir, imprime o Aluno não encontrado
                console.log("Aluno não encontrado!");
                break;
            }
            
            console.log(`📜 Boleto gerado para ${aluno.nomeAluno} no valor de R$ 500,00.`); // Busca o nome do aluno na Classe aluno e imprime o valor da mensalidade, que foi gerada como uma Constante
            break;
        }
            */
        case 7: { // Gerar Boleto do Aluno
            // Exibe a lista de alunos cadastrados
            console.log("\n📚 Alunos Cadastrados:");
            if (minhaEscola.listaAlunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
                break;
            } else {
                minhaEscola.listaAlunos.forEach((aluno, index) => {
                    console.log(`${index + 1}. ${aluno.nomeAluno}`);
                });
            }
        
            // Solicita que o usuário escolha o aluno
            let alunoEscolhido = Number(entradaDados.question("Escolha o número do aluno para gerar boleto: "));
            if (alunoEscolhido < 1 || alunoEscolhido > minhaEscola.listaAlunos.length) {
                console.log("Opção de aluno inválida!");
                break;
            }
            
            let aluno = minhaEscola.listaAlunos[alunoEscolhido - 1]; // Seleciona o aluno escolhido
        
            // Gera o boleto para o aluno escolhido
            aluno.gerarBoleto();
            break;
        }
        case 8: // Sair do App
            continua = false;
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}