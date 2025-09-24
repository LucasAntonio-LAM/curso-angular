"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeCarros = void 0;
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
//import { MotoDao } from './DaoMoto'
//import { CarroDao } from './DaoCarro'
const Dao_1 = require("./Dao");
/* -- Criar Carros */
let carroA = new Carro_1.default('Dodge Journey', 4);
let carroB = new Carro_1.default('Veloster', 3);
let carroC = new Carro_1.default('Cerato', 4);
/* Montar a lista de carros da concessionaria */
exports.listaDeCarros = [carroA, carroB, carroC];
let carro = new Carro_1.default('Veloster', 3);
carro.acelerar();
let concessionaria = new Concessionaria_1.default('', []);
let pessoa = new Pessoa_1.default('', '');
//let dao: MotoDao = new MotoDao()
//let moto: Moto = new Moto()
//dao.inserir(moto)
let dao3 = new Dao_1.Dao();
let dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
//# sourceMappingURL=app.js.map