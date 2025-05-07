#Listas (Mutáveis, ordenadas, aceitam duplicatas)

# Criando e acessando sua lista:
lista = ["João", "Maria", "Regina", "Susana"]
print(lista[1])
print(lista[0:3])
print(lista[-1])  # Saída: 40 (último elemento)
print(lista[-2:])  # Saída: [Regina, Susana] (últimos dois elementos)
print(lista[:2])  # Saída: [Joao, Maria] (primeiros dois elementos) 
print(lista[::2])  # Saída: [Joao, Regina] (elementos em posições pares)
print(lista[::-1])  # Saída: (inversão da lista)   
print(lista[1:4:2])  # Saída: [Maria, Susana] (fatiamento com passo 2)
print(lista[1:])  # Saída: [Maria, Regina, Susana] (do índice 1 até o final) 
print(lista[:3])  # Saída: [Joao, Maria, Regina] (do início até o índice 2)
print(lista[-3:-1])  # Saída: [Maria, Regina] (do índice -3 até -2)        
print(len(lista))  # Saída: 4 
print(lista.count("Joao"))  # Saída: 1 (conta quantas vezes o valor Joao aparece na lista)

# Métodos essenciais:
lista.append("Joao Flavio") # Adiciona no final:
print(lista)
lista.insert(1, "Fabiana") # Adiciona na posição 1: Joao, Fabiana, Maria
print(lista)
lista.remove("Susana") # Remove
valor = lista.pop(2) # Remove e retorna o índice 2 Maria
print(lista)
lista.sort() # Ordena em ordem crescente alfabética
print(lista)
lista.reverse() # Inverte a ordem da lista
print(lista)
lista.clear() # Limpa a lista
print(lista)