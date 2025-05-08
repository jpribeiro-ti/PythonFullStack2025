# Atividade Prática: Sistema de uma Biblioteca
'''
Contexto:
Você foi contratado para desenvolver um sistema de gerenciamento de biblioteca usando POO em Python.
O sistema deve modelar livros, usuários e empréstimos, com funcionalidades básicas de cadastro, consulta e operações.

Requisitos:
- O sistema deve permitir o cadastro de livros, usuários e empréstimos.
- O sistema deve permitir a consulta de livros cadastrados.
- O sistema deve permitir a consulta de usuários cadastrados.
'''

# DESAFIO (opcional) Classe LivroDigital:
# Herde de Livro e adicione o formato do e-book e formas de download.

class livro:
    """
    Sistema de Gerenciamento de Biblioteca
    Criando o método construtor da classe

    """
    def __init__(self, titulo, autor, isbn, quantidade):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.quantidade = quantidade
    
    def __str__(self):
        return f'Título {self.titulo} \n Autor {self.autor} \n ISBN {self.isbn} \n Quantidade {self.quantidade}'
    
    def __repr__(self):
        return f'livro(titulo={self.titulo}, autor={self.autor}, isbn={self.isbn}, quantidade={self.quantidade})'
    
    def __add__(self, other):
        return self.quantidade + other.quantidade
    
class Usuario:

    def __init__(self, nome, usuarioid, email):
        self.nome = nome
        self.usuarioid = usuarioid
        self.email = email
    
    def __str__(self):
        return f'Nome: {nome}\n Usuário: {self.usuarioid}\n Email: {self.email}'
    
    def __repr__(self):
        return f'Usuario(nome={self.nome}, usuarioid={self.usuarioid}, email={self.email})'
    
    def __add__(self, other):
        return self.usuarioid + other.usuarioid
    
class Emprestimo:

    def __init__(self, livro, usuario, data_emprestimo, data_devolucao):
        self.livro = livro
        self.usuario = usuario
        self.data_emprestimo = data_emprestimo
        self.data_devolucao = data_devolucao

    def realizar_emprestimo(self):
        if self.livro.quantidade > 0:
            self.livro.quantidade -= 1
            return(f"Empréstimo realizado: {self.livro} para {self.usuario}")
        return("Empréstimo não realizado: Livro indisponível")

    def __str__(self):
        return f"Emprestimo[{self.livro}] -> {self.usuario}"

    def __str__(self):
        return f'Livro: {self.livro}\n Usuário: {self.usuario}\n Data de Emprestimo: {self.data_emprestimo}\n Data de Devolução: {self.data_devolucao}'
    
    def __repr__(self):
        return f'Emprestimo(livro={self.livro}, usuario={self.usuario}, data_emprestimo={self.data_emprestimo}, data_devolucao={self.data_devolucao})'
    
    def __add__(self, other):
        return self.data_emprestimo + other.data_emprestimo

class Biblioteca:
    def __init__(self):
        self.livros = []
        self.usuarios = []
        self.emprestimos = []

    def cadastrar_livro(self, livro):
        self.livros.append(livro)
        return f'Livro cadastrado: {livro}'
    
    def cadastrar_usuario(self, usuario):
        self.usuarios.append(usuario)
        return f'Usuário cadastrado: {usuario}'
    
    def listar_livros(self):
        print("Livros cadastrados:")
        for livro in self.livros:
            print(livro)

    def listar_emprestimos(self):
        print("Emprestimos cadastrados:")
        for emprestimo in self.emprestimos:
            print(emprestimo)

    def listar_usuarios(self):
        print("Usuários cadastrados:")
        for usuario in self.usuarios:
            print(usuario)
    
# Criação da biblioteca
biblioteca = Biblioteca()

# Cadastro de livros
livro1 = Livro("1984", "George Orwell", "1234567890", 3)
livro2 = Livro("Brave New World", "Aldous Huxley", "0987654321", 2)
biblioteca.cadastrar_livro(livro1)
biblioteca.cadastrar_livro(livro2)

# Cadastro de usuários
usuario1 = Usuario("Alice", "U001")
usuario2 = Usuario("Bob", "U002")
biblioteca.cadastrar_usuario(usuario1)
biblioteca.cadastrar_usuario(usuario2)

# Realizar um empréstimo
emprestimo1 = Emprestimo(livro1, usuario1)
emprestimo1.realizar_emprestimo()

# Consultas
biblioteca.listar_livros()
biblioteca.listar_usuarios()



"""
class Livro:
    def __init__(self, titulo, autor, ano_publicacao):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano_publicacao

    def __str__(self):
        return f"Título: {self.titulo}\nAutor: {self.autor}\nAno de Publicação: {self.ano_publicacao}"

    def __repr__(self):
        return f"Livro(titulo='{self.titulo}', autor='{self.autor}', ano_publicacao={self.ano_publicacao})"

        """
