//1.Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente.
//Calcule o preço final após aplicar o desconto e imprima o resultado.

let preco = 150.0;
let desconto = 20;

let preco_final = preco - desconto;
console.log(preco_final);

//

//2.Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura,
//com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

let peso = 70;
let altura = 1.75;

let imc = peso / (altura ** 2);
console.log(imc);

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

let nivel_acesso = 2; //prompt("Digite o seu nível de acesso: ");

if (nivel_acesso == 3) {
    console.log("Acesso total");
} else if  (nivel_acesso == 2) {
    console.log("Acesso parcial");
} else if (nivel_acesso == 1) {
    console.log("Acesso restrito");
} else {
    console.log("Digite o código válido!!!");
}

//

//5. Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius.
//Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.


let celsius = 50; //float(prompt("Digite a temperatura em graus Celsius: "));

let F = (celsius * 9/5) + 32
console.log('A Temperatura em Celsius', + celsius + 'º convertida para Fahrenheit é')