"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeCarros = void 0;
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* -- Criar Carros */
let carroA = new Carro_1.default('Dodge Journey', 4);
let carroB = new Carro_1.default('Veloster', 3);
let carroC = new Carro_1.default('Cerato', 4);
/* Montar a lista de carros da concessionaria */
exports.listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Paulista', exports.listaDeCarros);
/* Exibir a lista de carros */
// console.log(concessionaria.mostrarListaDeCarros())
/* -- Comprar o carro -- */
let cliente = new Pessoa_1.default('Lucas', 'Dodge Journey');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (cliente.dizerCarroPreferido() === carro.dizerModelo()) {
        // Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
//# sourceMappingURL=app.js.map