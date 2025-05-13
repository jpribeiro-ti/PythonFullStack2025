# 1. Filtre produtos com preço > 1000 usando list comprehension
def filtrar_produtos(produtos):
    """
    Recebe uma lista de produtos (como dicionários) e retorna
    uma lista de produtos com preço maior que 1000.
    """
    return [produto for produto in produtos if produto['preco'] > 1000]

# Exemplo de uso
produtos = [
    {'nome': 'Laptop', 'preco': 1500},
    {'nome': 'Celular', 'preco': 800},
    {'nome': 'Tablet', 'preco': 1200}
]

produtos_filtrados = filtrar_produtos(produtos)
print("Produtos com preço acima de 1000:", produtos_filtrados)

# 2. Conte quantos produtos existem por categoria usando dicionário
def contar_por_categoria(produtos):
    """
    Recebe uma lista de produtos e retorna um dicionário
    com a contagem de produtos por categoria.
    """
    contagem = {}
    for produto in produtos:
        categoria = produto['categoria']
        if categoria in contagem:
            contagem[categoria] += 1
        else:
            contagem[categoria] = 1
    return contagem

# Exemplo de uso
produtos = [
    {'nome': 'Laptop', 'categoria': 'Eletrônicos'},
    {'nome': 'Celular', 'categoria': 'Eletrônicos'},
    {'nome': 'Mesa', 'categoria': 'Móveis'}
]

contagem_categorias = contar_por_categoria(produtos)
print("Contagem por categoria:", contagem_categorias)

# 3. Remova duplicatas de uma lista de pedidos usando set
def remover_duplicatas(pedidos):
    """
    Recebe uma lista de pedidos e retorna uma lista sem duplicatas.
    """
    return list(set(pedidos))

# Exemplo de uso
pedidos = ['pedido1', 'pedido2', 'pedido1', 'pedido3', 'pedido2']
pedidos_unicos = remover_duplicatas(pedidos)
print("Pedidos únicos:", pedidos_unicos)

# 4. Armazene dados de colaboradores e implemente operações
def gerenciar_colaboradores():
    colaboradores = {}

    def adicionar_colaborador(id, nome, salario):
        """
        Adiciona um novo colaborador ao dicionário de colaboradores.
        """
        colaboradores[id] = {'nome': nome, 'salario': salario}

    def buscar_por_id(id):
        """
        Busca um colaborador pelo ID e retorna suas informações.
        """
        return colaboradores.get(id, None)

    def listar_acima_de_salario(valor):
        """
        Retorna uma lista de colaboradores com salário acima do valor especificado.
        """
        return [colaborador for colaborador in colaboradores.values() if colaborador['salario'] > valor]

    # Exemplos de uso interno
    adicionar_colaborador(1, 'Alice', 3000)
    adicionar_colaborador(2, 'Bob', 1500)

    colaborador = buscar_por_id(1)
    print("Colaborador com ID 1:", colaborador)

    colaboradores_acima = listar_acima_de_salario(2000)
    print("Colaboradores com salário acima de 2000:", colaboradores_acima)

# Executa as operações de colaboradores
gerenciar_colaboradores()