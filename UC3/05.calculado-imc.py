def calcularImc():
    peso: float = float(input("Digite o seu peso: "))
    altura: float = float(input("Digite a sua altura: "))

    imc = peso / (altura * 2)
    print(f'Seu Imc é: {imc:.2f}')
    
    if imc < 18.5:
        print("Classificação: Magreza")
    elif imc < 25:
        print("Classificação: Normal")
    elif imc < 30:
        print("Classificação: Sobrepeso")
    elif imc < 40:
        print("Classificação: Obesidade")
    else:
        print("Classificação: Obesidade Grave")

calcularImc()