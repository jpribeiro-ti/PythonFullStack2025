// comando FOR 
let numero = parseInt(prompt("Digite um número: "))
for (let i = numero; i >= 0; i--) {
    console.log(i)
}


// # 2. Soma de Número com WHILE:
// Peça ao usuário um número e some
// todos os números de 1 até ele:

let numero2 = parseInt(prompt("Digite um número: "));
let soma = 0;
let indice = 1;

while (indice <= numero2) {
    soma += indice;
    indice;
}

console.log("Soma: ", soma);


let num = parseInt(prompt("Digite um número: "))
for (let i = 1; i <= 10; i++) {
    //console.log(num * i);
    console.log('${num} x ${i} = ${num * i} \n')
}

// WHILE

let numero3 = parseInt(prompt("Digite um número: "))
i = 1
while (inicio <= 10) {
    console.log(num * 1)
    inicio++;
}


// 4. Números Pares com FOR:
// Peça ao usuário um número e mostre todos os números pares de 1 até ele.

let numero4 = parseInt(prompt("Digite um número para ver os pares até ele:"));
for (let i = 2; i <= numero4; i += 2) {
    console.log(i);

// 5. Fatorial com WHILE:
// Peça ao usuário um número e calcule o fatorial dele.
let numero5 = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
let i = 1;
while (i <= numero5) {
    fatorial *= i;
    i++;
}
console.log(`Fatorial de ${numero5}: ${fatorial}`); // imprime o fatorial do número digitado pelo usuário (fatorial);

// 6. Validação de Entrada com DO WHILE:
// Peça ao usuário um número maior que 10. Se ele digitar um número inválido, peça novamente.

let numero6;
do {
    numero6 = parseInt(prompt("Digite um número maior que 10: "));
} while (numero6 <= 10) 
console.log("Número válido:: ", numero6);

// 7. Desenho com Loops Aninhados (DESAFIO)
// Peça ao usuário o tamanho de um quadrado e desenhe-o com asteriscos (*).

let vertical = parseInt(prompt("Digite o tamanho do quadrado: "));
let horizontal = parseInt(prompt("Digite o tamanho do quadrado: "));
for (let i = 0; i < vertical; i++) {
    let linha = "";
    for (let j = 0; j < horizontal; j++) {
        linha += "* ";
    }
    console.log(linha);
}