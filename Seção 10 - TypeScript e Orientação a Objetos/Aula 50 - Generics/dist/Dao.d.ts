import { DaoInterface } from "./DaoInterface";
export declare class Dao<T> implements DaoInterface {
    nomeTabela: string;
    inserir(object: T): boolean;
    atualizar(object: T): boolean;
    remover(id: number): T;
    selecionar(id: number): T;
    selecionarTodos(): Array<any>;
}
//# sourceMappingURL=Dao.d.ts.map