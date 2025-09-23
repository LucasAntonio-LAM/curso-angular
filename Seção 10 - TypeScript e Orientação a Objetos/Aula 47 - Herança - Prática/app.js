"use strict";
/* -- Criar Carros */
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeCarros = void 0;
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Cerato', 4);
/* Montar a lista de carros da concessionaria */
exports.listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av Paulista', exports.listaDeCarros);
/* Exibir a lista de carros */
// console.log(concessionaria.mostrarListaDeCarros())
/* -- Comprar o carro -- */
var cliente = new Pessoa('Lucas', 'Dodge Journey');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (cliente.dizerCarroPreferido() === carro.dizerModelo()) {
        // Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
