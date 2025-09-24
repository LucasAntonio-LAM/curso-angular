"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    nomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('Logica Select');
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('Logica GetAll');
        return [new Pessoa_1.default('', '')];
    }
}
exports.PessoaDao = PessoaDao;
//# sourceMappingURL=PessoaDao.js.map