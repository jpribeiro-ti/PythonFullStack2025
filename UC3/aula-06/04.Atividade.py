





# 2. Classes Abstratas:
'''
Crie uma classe abstrata Animal com método comum a todas as classes-filhas.
Implemente, pelo menos, as classes Cachorro e Gato com 3 métodos para cada uma.
'''

# 3. Padrão de Acesso a Repositórios

# Crie uma classe UsuarioRepository com os seguintes métodos:
'''
- cadastrar(usuario): cadastra um usuário (dicionário com nome e email).
- listar_todos(): retorna uma lista com todos os usuários cadastrados.
- buscar_por_email(email): retorna o usuário correspondente ao email informado.
- remover(email): remove o usuário correspondente ao email informado. 
- atualizar(usuario): atualiza os dados do usuário correspondente ao email informado.
- listar_por_nome(nome): retorna uma lista com todos os usuários que possuem o nome informado.
- listar_por_email(email): retorna uma lista com todos os usuários que possuem o email informado.
- listar_por_nome_e_email(nome, email): retorna uma lista com todos os usuários que possuem o nome e email informados.
'''

# 4. DESAFIO: retorne às atividades 2 e 3 e implemente uma metaclasse dentro de seus respectivos contextos.

# Atividades Práticas:

# 1. Crie uma classe Conta com:
'''
Atributo _saldo (privado).
Getter saldo que retorna o valor formatado (ex: R$1000.00).
Setter que bloqueia valores negativos.
'''
class Conta:
    '''Criando a Classe Conta'''
    def __init__(self, saldo):
        '''Método especial __init__: inicializa o objeto.'''
        self._saldo = saldo
        '''Atributo privado _saldo'''
    def depositar(self, valor):
        '''Adiciona um valor ao saldo da conta.'''
        self._saldo += valor
        '''Atributo privado _saldo, incrementando o valor'''

    '''Getter saldo que retorna o valor formatado (ex: R$1000.00).'''
    @property
    def saldo(self):
        '''Método saldo que retorna o valor formatado'''
        return f"R${self._saldo:.2f}"
        '''Atributo privado _saldo'''

    @saldo.setter
    def saldo(self, valor): #Setter que bloqueia valores negativos.
        if valor >=0:
            self._saldo = valor
        else:
            raise ValueError("O saldo não pode ser negativo!")

valor:float = float(input("Digite o valor a ser depositado: "))
conta = Conta(0)
conta.depositar(valor)
print(conta.saldo)
        
# 2. Classes Abstratas:
'''
Crie uma classe abstrata Animal com método comum a todas as classes-filhas.
Implemente, pelo menos, as classes Cachorro e Gato com 3 métodos para cada uma.
'''

class Animal:
    def __init(self, nome, especie, idade):
        self.nome = nome
        self.especie = especie
        self.idade = idade

    def brincar(self):
        return f"{self.nome} esta brincando."
    
    def comer(self):
        if self.especie == "cachorro":
            return f"{self.nome} esta comendo ração de cães."
        elif self.especie == "gato":
            return f"{self.nome} esta comendo ração de gatos."
        return f"{self.nome} esta comendo."
    
    def dormir(self):
        return f"{self.nome} esta dormindo."

    informacoes = {}
        
class Cachorro(Animal):
    def __init__(self, nome, idade, raca):
        super().__init__(nome, "cachorro", idade)
        self.raca = raca
            



    
