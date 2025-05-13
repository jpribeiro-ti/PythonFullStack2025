from abc import ABC, abstractmethod

# Classe abstrata Animal
class Animal(ABC):
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    @abstractmethod
    def emitir_som(self):
        '''Método abstrato que deve ser implementado pelas classes-filhas.'''
        pass

    def brincar(self):
        return f"{self.nome} está brincando."

    def comer(self):
        return f"{self.nome} está comendo."

# Classe Cachorro, herda de Animal
class Cachorro(Animal):
    def __init__(self, nome, idade, raca):
        super().__init__(nome, idade)
        self.raca = raca

    def emitir_som(self):
        return f"{self.nome} está latindo!"

    def buscar_bola(self):
        return f"{self.nome} trouxe a bola de volta!"

    def correr(self):
        return f"{self.nome} está correndo!"

# Classe Gato, herda de Animal
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

# Classe UsuarioRepository para gerenciar usuários
class UsuarioRepository:
    def __init__(self):
        self.usuarios = []

    def cadastrar(self, usuario):
        '''Cadastra um novo usuário. Recebe um dicionário com nome e email.'''
        self.usuarios.append(usuario)

    def listar_todos(self):
        '''Retorna uma lista com todos os usuários cadastrados.'''
        return self.usuarios

    def buscar_por_email(self, email):
        '''Retorna o usuário correspondente ao email informado.'''
        for usuario in self.usuarios:
            if usuario['email'] == email:
                return usuario
        return None

    def remover(self, email):
        '''Remove o usuário correspondente ao email informado.'''
        for usuario in self.usuarios:
            if usuario['email'] == email:
                self.usuarios.remove(usuario)
                return True
        return False

    def atualizar(self, usuario_atualizado):
        '''Atualiza os dados do usuário correspondente ao email informado.'''
        for i, usuario in enumerate(self.usuarios):
            if usuario['email'] == usuario_atualizado['email']:
                self.usuarios[i] = usuario_atualizado
                return True
        return False

    def listar_por_nome(self, nome):
        '''Retorna uma lista com todos os usuários que possuem o nome informado.'''
        return [usuario for usuario in self.usuarios if usuario['nome'] == nome]

    def listar_por_email(self, email):
        '''Retorna uma lista com todos os usuários que possuem o email informado.'''
        return [usuario for usuario in self.usuarios if usuario['email'] == email]

    def listar_por_nome_e_email(self, nome, email):
        '''Retorna uma lista com todos os usuários que possuem o nome e email informados.'''
        return [usuario for usuario in self.usuarios if usuario['nome'] == nome and usuario['email'] == email]

# Classe Conta para gerenciar saldo bancário
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

    @property
    def saldo(self):
        '''Método saldo que retorna o valor formatado'''
        return f"R${self._saldo:.2f}"
        '''Atributo privado _saldo'''

    @saldo.setter
    def saldo(self, valor):
        '''Setter que bloqueia valores negativos.'''
        if valor >= 0:
            self._saldo = valor
        else:
            raise ValueError("O saldo não pode ser negativo!")

# Exemplo de uso
if __name__ == "__main__":
    valor = float(input("Digite o valor a ser depositado: "))
    conta = Conta(0)
    conta.depositar(valor)
    print(conta.saldo)