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
let concessionaria = new Concessionaria('Av Paulista');
console.log(concessionaria);
//# sourceMappingURL=app.js.map