"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
/* -- Criar Carros */
let carro = new Carro_1.default('Veloster', 3);
carro.acelerar();
let moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);
//# sourceMappingURL=app.js.map