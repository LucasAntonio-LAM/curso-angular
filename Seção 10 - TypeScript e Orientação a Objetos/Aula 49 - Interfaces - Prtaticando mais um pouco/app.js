"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeCarros = void 0;
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
/* -- Criar Carros */
var carroA = new Carro_1.default('Dodge Journey', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
/* Montar a lista de carros da concessionaria */
exports.listaDeCarros = [carroA, carroB, carroC];
var carro = new Carro_1.default('Veloster', 3);
carro.acelerar();
var concessionaria = new Concessionaria_1.default('', []);
var moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
