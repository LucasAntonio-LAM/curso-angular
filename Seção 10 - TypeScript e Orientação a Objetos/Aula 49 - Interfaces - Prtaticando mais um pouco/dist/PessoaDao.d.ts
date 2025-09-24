import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";
export declare class PessoaDao implements DaoInterface {
    nomeTabela: string;
    inserir(object: Pessoa): boolean;
    atualizar(object: Pessoa): boolean;
    remover(id: number): Pessoa;
    selecionar(id: number): Pessoa;
    selecionarTodos(): Array<any>;
}
//# sourceMappingURL=PessoaDao.d.ts.map