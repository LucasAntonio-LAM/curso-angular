"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Concessionaria {
    endereco;
    listaDeCarros;
    constructor(endereco, listadeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = app_1.listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerHorarioDeFuncionamento() {
        return `De segunda á sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00`;
    }
}
exports.default = Concessionaria;
//# sourceMappingURL=Concessionaria.js.map