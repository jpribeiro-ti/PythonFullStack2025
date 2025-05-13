from abc import ABC, abstractmethod

# =========================
# 2. Classes Abstratas
# =========================

# Classe abstrata Animal
class Animal(ABC):
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    @abstractmethod
    def emitir_som(self):
        '''Método que será implementado por todas as classes-filhas.'''
        pass

    def brincar(self):
        return f"{self.nome} está brincando."

    def comer(self):
        return f"{self.nome} está comendo."


# Classe Cachorro que herda de Animal
class Cachorro(Animal):
    def __init__(self, nome, idade, raca):
        super().__init__(nome, idade)  # Chama o __init__ da classe pai
        self.raca = raca

    def emitir_som(self):
        return f"{self.nome} está latindo!"

    def buscar_bola(self):
        return f"{self.nome} trouxe a bola de volta!"

    def correr(self):
        return f"{self.nome} está correndo!"


# Classe Gato que herda de Animal
class Gato(Animal):
    def __init__(self, nome, idade, cor):
        super().__init__(nome, idade)
        self.cor = cor

    def emitir_som(self):
        return f"{self.nome} está miando!"

    def arranhar(self):
        return f"{self.nome} está arranhando o sofá!"

    def pular(self):
        return f"{self.nome} pulou para cima do armário!"

# =========================
# 3. Padrão de Acesso a Repositórios
# =========================

# Classe para gerenciar usuários
class UsuarioRepository:
    def __init__(self):
        self.usuarios = []  # Lista para armazenar os usuários

    def cadastrar(self, usuario):
        '''Cadastra um usuário (dicionário com nome e email).'''
        self.usuarios.append(usuario)

    def listar_todos(self):
        '''Retorna todos os usuários cadastrados.'''
        return self.usuarios

    def buscar_por_email(self, email):
        '''Retorna o usuário com o email informado.'''
        for usuario in self.usuarios:
            if usuario['email'] == email:
                return usuario
        return None

    def remover(self, email):
        '''Remove o usuário com o email informado.'''
        for usuario in self.usuarios:
            if usuario['email'] == email:
                self.usuarios.remove(usuario)
                return True
        return False

    def atualizar(self, usuario):
        '''Atualiza os dados do usuário pelo email.'''
        for i, u in enumerate(self.usuarios):
            if u['email'] == usuario['email']:
                self.usuarios[i] = usuario
                return True
        return False

    def listar_por_nome(self, nome):
        '''Retorna lista de usuários com o nome informado.'''
        return [u for u in self.usuarios if u['nome'] == nome]

    def listar_por_email(self, email):
        '''Retorna lista de usuários com o email informado.'''
        return [u for u in self.usuarios if u['email'] == email]

    def listar_por_nome_e_email(self, nome, email):
        '''Retorna lista de usuários com nome e email informados.'''
        return [u for u in self.usuarios if u['nome'] == nome and u['email'] == email]

# =========================
# 4. Exercício Conta com saldo privado
# =========================

class Conta:
    def __init__(self, saldo):
        self._saldo = saldo  # atributo privado

    def depositar(self, valor):
        '''Adiciona valor ao saldo.'''
        self._saldo += valor

    @property
    def saldo(self):
        '''Retorna o saldo formatado em R$xx.xx.'''
        return f"R${self._saldo:.2f}"

    @saldo.setter
    def saldo(self, valor):
        '''Permite alterar o saldo, bloqueando valores negativos.'''
        if valor >= 0:
            self._saldo = valor
        else:
            raise ValueError("Saldo não pode ser negativo!")

# =========================
# Exemplos de uso de todas as atividades
# =========================
if __name__ == "__main__":
    # --- Atividade 1: Filtrar produtos com preço > 1000 ---
    produtos = [
        {'nome': 'Laptop', 'preco': 1500},
        {'nome': 'Celular', 'preco': 800},
        {'nome': 'Tablet', 'preco': 1200}
    ]
    produtos_filtrados = [p for p in produtos if p['preco'] > 1000]
    print("Produtos com preço > 1000:", produtos_filtrados)

    # --- Atividade 2: Contar produtos por categoria ---
    produtos_categorias = [
        {'nome': 'Laptop', 'categoria': 'Eletrônicos'},
        {'nome': 'Celular', 'categoria': 'Eletrônicos'},
        {'nome': 'Mesa', 'categoria': 'Móveis'},
        {'nome': 'Cadeira', 'categoria': 'Móveis'},
        {'nome': 'Refrigerador', 'categoria': 'Eletrodomésticos'}
    ]
    contagem_categorias = {}
    for p in produtos_categorias:
        cat = p['categoria']
        if cat in contagem_categorias:
            contagem_categorias[cat] += 1
        else:
            contagem_categorias[cat] = 1
    print("Contagem por categoria:", contagem_categorias)

    # --- Atividade 3: Remover duplicatas de uma lista de pedidos ---
    pedidos = ['pedido1', 'pedido2', 'pedido3', 'pedido1', 'pedido2']
    pedidos_unicos = list(set(pedidos))
    print("Pedidos sem duplicatas:", pedidos_unicos)

    # --- Atividade 4: Gerenciar colaboradores ---
    # Instancia de repositório
    repo = UsuarioRepository()

    # Adicionando colaboradores
    repo.cadastrar({'nome': 'Ana', 'email': 'ana@email.com', 'salario': 3500})
    repo.cadastrar({'nome': 'Bruno', 'email': 'bruno@email.com', 'salario': 2500})
    repo.cadastrar({'nome': 'Carlos', 'email': 'carlos@email.com', 'salario': 4000})

    # Buscar colaborador por ID (neste exemplo, usando o email como ID)
    colaborador = repo.buscar_por_email('bruno@email.com')
    print("Colaborador buscado por email:", colaborador)

    # Listar colaboradores com salário acima de X
    salarios_altos = [c for c in repo.listar_todos() if c['salario'] > 3000]
    print("Colaboradores com salário acima de 3000:", salarios_altos)

    # Atualizar um colaborador
    repo.atualizar({'nome': 'Bruno', 'email': 'bruno@email.com', 'salario': 3200})
    print("Antes da atualização:", repo.buscar_por_email('bruno@email.com'))

    # Remover um colaborador
    repo.remover('carlos@email.com')
    print("Lista após remoção:", repo.listar_todos())

    # Listar todos
    print("Todos colaboradores:", repo.listar_todos())