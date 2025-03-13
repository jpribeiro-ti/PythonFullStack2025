//1.Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente.
//Calcule o preço final após aplicar o desconto e imprima o resultado.

let preco = 150.0;
let desconto = 20;

let precoFinal = preco - (preco * desconto / 100);
console.log("Preço final após desconto: ", precoFinal);

//

//2.Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura,
//com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

let peso = 70;
let altura = 1.75;

let imc = peso / (altura ** 2);
console.log("Seu IMC é: ", imc);

//

//3. Verificação de Elegibilidade para um Concurso Declare duas variáveis, idade e tem_experiencia, com valores 22 e True, respectivamente.
//Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem experiência) e imprima o resultado.

let idade = 22;
let tem_experiencia = true;

let pessoa_elegivel_concurso = idade >= 18 && tem_experiencia;

console.log(pessoa_elegivel_concurso);

//

//4. Classificação de Níveis de Acesso Declare uma variável nivel_acesso com um valor entre 1 e 3. Use estruturas condicionais para imprimir:
//"Acesso total" se o nível for 3. "Acesso parcial" se o nível for 2. "Acesso restrito" se o nível for 1.

let nivel_acesso = 3; //parseInt(prompt("Digite o seu nível de acesso: "));

if (nivel_acesso === 3) {
    console.log("Acesso total");
} else if  (nivel_acesso === 2) {
    console.log("Acesso parcial");
} else if (nivel_acesso === 1) {
    console.log("Acesso restrito");
} else {
    console.log("Digite o código válido!!!");
}

//

//5. Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius.
//Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.


let celsius = 50; //float(prompt("Digite a temperatura em graus Celsius: "));

let F = (celsius * 9/5) + 32
console.log('A Temperatura em Celsius', + celsius + 'º convertida para Fahrenheit é:', F)

//

//6. Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro.
//Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

num = 5; //int(input("Digite o número para saber se é par ou ímpar: "))

if (num % 2 == 0) {
    console.log("O número {num} é Par!")
}
else {
    console.log("O número {num} é Ímpar!")
}

//

//7. Cálculo de Frete com Base no Peso Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:
//Peso até 5 kg: R$  20.00
//Peso acima de 10 kg: R$ 30.00
//Imprima o valor do frete.
    
peso = 15; //int(input("Digite o peso do Frete: "))
let frete;

if (peso <= 5) {
    frete = 20.00;
}
else if  (peso <=10 ) {
    frete = 20.00
}
else
    frete = 30.00

console.log('O valor do Frete é: ', frete)