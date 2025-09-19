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
let carroA = new Carro('Veloster', 3);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
console.log(carroA);
//# sourceMappingURL=app.js.map