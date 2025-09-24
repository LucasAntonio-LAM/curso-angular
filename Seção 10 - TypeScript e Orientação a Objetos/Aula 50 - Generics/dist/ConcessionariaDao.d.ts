import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";
export declare class ConcessionariaDao implements DaoInterface {
    nomeTabela: string;
    inserir(object: Concessionaria): boolean;
    atualizar(object: Concessionaria): boolean;
    remover(id: number): Concessionaria;
    selecionar(id: number): Concessionaria;
    selecionarTodos(): Array<any>;
}
//# sourceMappingURL=ConcessionariaDao.d.ts.map