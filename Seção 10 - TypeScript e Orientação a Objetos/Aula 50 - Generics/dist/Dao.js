"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    nomeTabela = '';
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
        return Object();
    }
    selecionar(id) {
        console.log('Logica Select');
        return Object();
    }
    selecionarTodos() {
        console.log('Logica GetAll');
        return [new Object()];
    }
}
exports.Dao = Dao;
//# sourceMappingURL=Dao.js.map