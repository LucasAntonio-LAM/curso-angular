"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
const Moto_1 = __importDefault(require("./Moto"));
class MotoDao {
    nomeTabela = 'tb_moto';
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
        return new Moto_1.default();
    }
    selecionar(id) {
        console.log('Logica Select');
        return new Moto_1.default();
    }
    selecionarTodos() {
        console.log('Logica GetAll');
        return [new Moto_1.default()];
    }
}
exports.MotoDao = MotoDao;
//# sourceMappingURL=DaoMoto.js.map