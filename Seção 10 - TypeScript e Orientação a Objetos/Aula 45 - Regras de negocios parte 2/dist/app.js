"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    modelo;
    numeroDePortas;
    velocidade = 0;
    constructor(modelo, numerodePortas) {
        this.modelo = modelo;
        this.numeroDePortas = numerodePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
    dizerModelo() {
        return this.modelo;
    }
}
class Concessionaria {
    endereco;
    listaDeCarros;
    constructor(endereco, listadeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    nome;
    carroPreferido;
    carro;
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return `Esse é o ${this.nome}`;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
/* -- Criar Carros */
let carroA = new Carro('Dodge Journey', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Cerato', 4);
/* Montar a lista de carros da concessionaria */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/* Exibir a lista de carros */
// console.log(concessionaria.mostrarListaDeCarros())
/* -- Comprar o carro -- */
let cliente = new Pessoa('Lucas', 'Dodge Journey');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (cliente.dizerCarroPreferido() === carro.dizerModelo()) {
        // Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
//# sourceMappingURL=app.js.map