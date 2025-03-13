# Nenhuma Constante
# Erro do usuário, não pode dividir por 0
# Commit (Comentar o código, documentar) Declaração de variáveis, mostra o resultado



#1.Cálculo de Desconto em uma Loja Declare duas variáveis, preco e desconto, com valores 150.0 e 20, respectivamente.
#Calcule o preço final após aplicar o desconto e imprima o resultado.

preco = float(input("Digite o preço do produto: "))
desconto = float(input("Digite o valor do desconto: "))

preco_final = preco - (preco * desconto / 100)
print("Preço final após desconto: ", preco_final)

#####------------######

#2.Cálculo de IMC (Índice de Massa Corporal) Declare duas variáveis, peso e altura,
#com valores 70 e 1.75, respectivamente. Calcule o IMC usando a fórmula: IMC = peso / (altura ** 2). Imprima o resultado.

peso = float(input("Digite o seu peso: "))
altura = float(input("Digite a sua altura: "))

imc = peso / (altura ** 2)
print(f"Seu IMC é: {imc}")

#3. Verificação de Elegibilidade para um Concurso Declare duas variáveis, idade e tem_experiencia, com valores 22 e True, respectivamente.
#Verifique se a pessoa é elegível para o concurso (idade maior ou igual a 18 e tem experiência) e imprima o resultado.

idade = int(input("Digite a sua idade: "))
tem_experiencia = True

pessoa_elegivel_concurso = idade >= 18 and tem_experiencia

print(f"Elegível para o concurso? {pessoa_elegivel_concurso}")

#4. Classificação de Níveis de Acesso Declare uma variável nivel_acesso com um valor entre 1 e 3. Use estruturas condicionais para imprimir:
#"Acesso total" se o nível for 3. "Acesso parcial" se o nível for 2. "Acesso restrito" se o nível for 1.

nivel_acesso = int(input("Digite o seu nível de acesso: "))

if nivel_acesso == 3:
    print("Acesso total")
elif nivel_acesso == 2:
    print("Acesso parcial")
elif nivel_acesso == 1:
    print("Acesso restrito")
else:
    print("Digite o código válido!!!")


#5. Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius.
#Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.


celsius = float(input("Digite a temperatura em graus Celsius: "))

F = (celsius * 9/5) + 32
print(f' A Temperatura em Celsius {celsius}º convertida para Fahrenheit é {F.round(2)}\n\n')

#6. Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro.
#Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.

num = int(input("Digite o número para saber se é par ou ímpar: "))

if num % 2 == 0:
    print(f"O número {num} é Par!")
else:
    print(f"O número {num} é Ímpar!")

#7. Cálculo de Frete com Base no Peso Declare uma variável peso com o peso de um pacote em kg. Calcule o frete com base nas seguintes regras:
#Peso até 5 kg: R$  20.00
#Peso acima de 10 kg: R$ 30.00
#Imprima o valor do frete.
    
peso = int(input("Digite o peso do Frete: "))

if peso <= 5:
    frete = 20.00
elif peso <= 10:
    frete = 20.00
else:
    frete = 30.00

print(f'O valor do Frete é {frete}')