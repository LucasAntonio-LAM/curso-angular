"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeCarros = void 0;
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
const DaoMoto_1 = require("./DaoMoto");
/* -- Criar Carros */
let carroA = new Carro_1.default('Dodge Journey', 4);
let carroB = new Carro_1.default('Veloster', 3);
let carroC = new Carro_1.default('Cerato', 4);
/* Montar a lista de carros da concessionaria */
exports.listaDeCarros = [carroA, carroB, carroC];
let carro = new Carro_1.default('Veloster', 3);
carro.acelerar();
console.log(carro);
let dao = new DaoMoto_1.MotoDao();
let moto = new Moto_1.default();
dao.inserir(moto);
//# sourceMappingURL=app.js.map