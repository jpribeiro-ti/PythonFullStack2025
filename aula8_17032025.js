// 1- Cálculo de Média de Notas: Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado.
// Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function notas(nota1, nota2, nota3, nota4) {
    let medianotas = (nota1 + nota2 + nota3 + nota4) / 4;

    if (medianotas >= 7) {
        return "Aprovado";
    } else if (medianotas >= 5 && medianotas < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

rl.question("Digite a primeira nota:", (nota1) => {
    rl.question("Digite a segunda nota:", (nota2) => {
        rl.question("Digite a terceira nota:", (nota3) => {
            rl.question("Digite a quarta nota:", (nota4) => {
                nota1 = parseFloat(nota1);
                nota2 = parseFloat(nota2);
                nota3 = parseFloat(nota3);
                nota4 = parseFloat(nota4);

                let resultado = notas(nota1, nota2, nota3, nota4);
                console.log("Classificação das notas: ", resultado);

                rl.close();
            });
        });
    })
});





function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade Grau I";        
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}



// 2. Soma dos Números Pares em um Intervalo: Peça ao usuário dois números, representando o início e o fim de um intervalo. Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.

// 3. Verificação de Palíndromo: Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".

// 4. Cálculo de Juros Simples: Peça ao usuário o valor principal (P), a taxa de juros anual (r) e o tempo em anos (t). Calcule o montante final usando a fórmula de juros simples M=P×(1+r×t) e exiba o resultado.

// 5. Contagem de Dígitos: Peça ao usuário um número inteiro positivo. Conte quantos dígitos esse número possui e exiba o resultado.