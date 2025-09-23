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
}
class Concessionaria {
    endereco;
    listaDeCarros;
    constructor(endereco) {
        this.endereco = endereco;
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
        return `O carro preferido de ${this.nome} é ${this.carroPreferido}`;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return `O carro que ${this.nome} tem é ${this.carro}`;
    }
}
let pessoa = new Pessoa('Lucas', 'Corsa');
console.log(pessoa.dizerCarroPreferido());
//# sourceMappingURL=app.js.map