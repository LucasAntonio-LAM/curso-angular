import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";
export declare class CarroDao implements DaoInterface {
    nomeTabela: string;
    inserir(object: Carro): boolean;
    atualizar(object: Carro): boolean;
    remover(id: number): Carro;
    selecionar(id: number): Carro;
    selecionarTodos(): Array<any>;
}
//# sourceMappingURL=DaoCarro.d.ts.map