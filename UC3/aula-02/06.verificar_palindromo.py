def VerificarPalindromo():
    texto = input("Digite uma palavra ou frase: ").lower().replace(" ", "")
    if texto == texto[::-1]:
        print("É um palíndromo!")
    else:
        print("Não é um palíndromo.")

VerificarPalindromo()