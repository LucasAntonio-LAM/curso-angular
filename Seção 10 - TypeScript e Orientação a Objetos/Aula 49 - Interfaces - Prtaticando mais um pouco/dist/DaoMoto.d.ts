import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";
export declare class MotoDao implements DaoInterface {
    nomeTabela: string;
    inserir(object: Moto): boolean;
    atualizar(object: Moto): boolean;
    remover(id: number): Moto;
    selecionar(id: number): Moto;
    selecionarTodos(): Array<any>;
}
//# sourceMappingURL=DaoMoto.d.ts.map