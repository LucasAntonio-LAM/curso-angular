import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class CarroDao implements DaoInterface {
    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Carro): boolean {
        console.log('Logica Update')
        return true
    }
    remover(id: number): Carro {
        console.log('Logica Delete')
        return new Carro('', 3)
    }
    selecionar(id: number): Carro {
        console.log('Logica Select')
        return new Carro('', 3)
    }
    selecionarTodos(): Array<any> {
        console.log('Logica GetAll')
        return [new Carro('', 3)]
    } 
}