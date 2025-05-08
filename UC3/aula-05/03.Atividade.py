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

class Livro:
    def __init__(self, titulo, autor, numlivro, quantidade):
        self.titulo = titulo
        self.autor = autor
        self.numlivro = numlivro
        self.quantidade = quantidade

    def realizar_emprestimo(self):
        if self.livro.quantidade > 0:
            self.livro.quantidade -= 1
            return(f"Empréstimo realizado: {self.livro} para {self.usuario}")
        return("Empréstimo não realizado: Livro indisponível")
        
    def __str__(self) -> str:
        return f'Título {self.titulo} \n Autor {self.autor} \n ISBN {self.isbn} \n Quantidade {self.quantidade}'
    
    def __repr__(self) -> str:
        return f'Título{self.titulo}, autor={self.autor}, isbn={self.isbn}, quantidade={self.quantidade}'
        
    def __add__(self, other):
        return self.quantidade + other.quantidade
    
    def __sub__(self, other):
        return self.quantidade - other.quantidade
    
class Usuarios:

    def __init__(self, nome, usuarioid, email):
        self.nome = nome
        self.usuarioid = usuarioid
        self.email = email
    
    def __str__(self):
        return f'Nome: {self.nome}\n Usuário: {self.usuarioid}\n Email: {self.email}'
    
    def __repr__(self):
        return f'Usuario(nome={self.nome}, usuarioid={self.usuarioid}, email={self.email})'
    
    def __add__(self, other):
        return self.usuarioid + other.usuarioid
    
    def __sub__(self, other):
        return self.usuarioid - other.usuarioid
    

