# Média escola
nota1:float = float(input("Digite a primeira nota: "))
nota2:float = float(input("Digite a segunda nota: "))
nota3: float = float(input("Digite a terceira nota: "))
nota4: float = float(input("Digite a quarta nota: "))

media = (nota1 + nota2 + nota3 + nota4) / 4

if media >= 9:
    Conceito = "A, Parabéns, você foi excelente!"
elif media >= 7:
    Conceito = "B, Parabéns, você foi muito bem!"
elif media >= 5:
    Conceito = "C, Você precisa estudar mais, está de recuperação!"
else:
    Conceito = "D, Você precisa de aulas de reforço"

print(f'Sua média é {media}, e seu conceito é: {Conceito}')

# Operadores Lógicos
try:
    idade = int(input("Digite sua idade: "))
except ValueError:
    print("Você precisa digitar um número inteiro para a idade.")
    exit()  # Encerra o programa se a entrada for inválida

tem_ingresso = input("Tem ingresso? (s/n): ").lower() == 's'

if idade >= 18 and tem_ingresso:
    print("Acesso permitido ao evento.")
elif idade < 18 and tem_ingresso:
    print("Acesso permitido somente com responsável.")
elif idade >= 18 and not tem_ingresso:
    print("Você é maior de idade, mas ainda não comprou o ingresso.")
else:
    print("Acesso negado")