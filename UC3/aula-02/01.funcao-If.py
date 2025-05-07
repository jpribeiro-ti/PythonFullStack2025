def saudacao(nome, sobrenome, idade):
    return f'Olá {nome} {sobrenome}, você tem {idade} anos.'

def verifica_idade_dirigir(idade_str, tem_cnh):
    idade = int(idade_str)  # Converte a idade para inteiro aqui
    if idade > 17 and tem_cnh == True:
        print("Você pode dirigir")
    elif idade > 17 and tem_cnh == False:
        print("Você é maior de idade, mas ainda não tirou a CNH")
    else:
        print("Você é menor de idade")

# Obtenção dos dados do usuários
nome = input("Digite o seu nome: ")
sobrenome = input("Digite o seu sobrenome: ")
idade_str = input("Informe a sua idade numeral: ")

# Conversão correta da string para booleano
tem_cnh_str = input("Você tem CNH? (digite False p/ Não ou True p/ Sim): ")
tem_cnh = tem_cnh_str.lower() == "true" # Assim, se o usuário digitar "True" (em qualquer capitalização), tem_cnh será convertido corretamente para True.

# Cria a mensagem de saudação
mensagem_saudacao = saudacao(nome, sobrenome, idade_str)
print(mensagem_saudacao)

verifica_idade_dirigir(idade_str, tem_cnh)
