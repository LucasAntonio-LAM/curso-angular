"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    modelo;
    velocidade = 0;
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
exports.default = Veiculo;
//# sourceMappingURL=Veiculo.js.map