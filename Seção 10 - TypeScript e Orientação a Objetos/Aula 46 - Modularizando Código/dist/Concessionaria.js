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
}
exports.default = Concessionaria;
//# sourceMappingURL=Concessionaria.js.map