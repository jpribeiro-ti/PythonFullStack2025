/*OPÇÃO 1: Sistema de Reservas de Hotel:

Crie uma classe Hotel com propriedades: nome, cidade, quartosDisponiveis.
Adicione métodos para reservarQuarto() e cancelarReserva().
Crie uma classe Cliente com nome, CPF e historicoReservas.
Implemente a interação entre elas.
OPÃO 2: Jogo de RPG Simples:

Crie uma classe Personagem com vida, ataque, defesa e nome.
Desenvolva subclasses Guerreiro, Mago e Arqueiro com habilidades especiais.
Implemente um sistema de batalha onde dois personagens podem lutar.
OPÇÃO 3: Sistema de Pedidos Online:

Modele classes para Produto (nome, preço, estoque),
Cliente (nome, endereço, carrinho) e Pedido (itens, total, status).
Implemente métodos para adicionar ao carrinho, finalizar compra e calcular frete.*/

class Hotel {
    constructor(nomeHotel, cidade, quartosDisponiveisHotel) {
        this.nomeHotel = nomeHotel;
        this.cidade = cidade;
        this.quartosDisponiveisHotel = quartosDisponiveisHotel;
        this.historicoReservas = []; // Criei o Array
    }
}

    reservarQuarto(cliente){
        if (this.quartosDisponiveisHotel > 0) { // Verifica se tem quartos disponiveis
            this.quartosDisponiveisHotel--; // Decrementa o número de quartos disponíveis
            this.historicoReservas.push({ // Adiciona o número de reserva ao histórico do cliente
                cliente: cliente.nomeCliente, // Interação a Classe Cliente
                cpf: cliente.cpfCliente,
                data: new Date().toLocaleString() // Registra a data da reserva
            });
            console.log(`Reserva confirmada para ${cliente.nomeCliente} no ${this.nomeHotel}.`);
            return true // Verdadeiro, reserva realizada
        } else {
            console.log(`${cliente.nomeCliente}, infelizmente não foi possível realizar a reserva, quartos indisponíveis no ${this.nomeHotel}.`);
            return false // Falso, não foi possível realizar a reserva
        }
    }


    cancelarReserva(cliente){
        if (this.reservarQuarto == true) {
            console.log(`Reserva cancelada para ${cliente.nomeCliente}`);
            this.quartosDisponiveisHotel++;
        }
    }
};

class Cliente {
    constructor(nomeCliente, cpfCliente) {
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
        this.historicoReservas = []; // Inicializa uma lista vazia para o histórico de reservas
    }

    adicionarReserva(hotel) {
        // Este método adiciona uma reserva ao histórico do cliente
        this.historicoReservas.push({
            hotel: hotel.nomeHotel,
            data: new Date().toLocaleString() // Registra a data da reserva
        });
    }

    visualizarHistorico() {
        // Método para visualizar o histórico de reservas do cliente
        console.log(`Histórico de Reservas de ${this.nomeCliente}:`);
        if (this.historicoReservas.length === 0) {
            console.log("Nenhuma reserva encontrada.");
        } else {
            this.historicoReservas.forEach(reserva => {
                console.log(`- Hotel: ${reserva.hotel}, Data: ${reserva.data}`);
            });
        }
    }
}

// Exemplo de uso
const hotel1 = new Hotel("Hotel Maravilha", "Rio de Janeiro", 20);
const cliente1 = new Cliente("João Silva", "123.456.789-00");

// O cliente tenta reservar um quarto
if (hotel1.reservarQuarto(cliente1)) {
    cliente1.adicionarReserva(hotel1); // Adiciona a reserva ao histórico do cliente
}

// O cliente visualiza seu histórico de reservas
cliente1.visualizarHistorico();