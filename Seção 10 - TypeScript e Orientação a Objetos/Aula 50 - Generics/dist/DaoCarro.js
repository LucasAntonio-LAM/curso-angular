"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const Carro_1 = __importDefault(require("./Carro"));
class CarroDao {
    nomeTabela = 'tb_carro';
    inserir(object) {
        console.log('logica de insert');
        return true;
    }
    atualizar(object) {
        console.log('Logica Update');
        return true;
    }
    remover(id) {
        console.log('Logica Delete');
        return new Carro_1.default('', 3);
    }
    selecionar(id) {
        console.log('Logica Select');
        return new Carro_1.default('', 3);
    }
    selecionarTodos() {
        console.log('Logica GetAll');
        return [new Carro_1.default('', 3)];
    }
}
exports.CarroDao = CarroDao;
//# sourceMappingURL=DaoCarro.js.map