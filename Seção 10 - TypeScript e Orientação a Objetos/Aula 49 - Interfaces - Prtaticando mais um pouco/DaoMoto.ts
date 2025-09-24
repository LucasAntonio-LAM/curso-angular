import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface {
    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Moto): boolean {
        console.log('Logica Update')
        return true
    }
    remover(id: number): Moto {
        console.log('Logica Delete')
        return new Moto()
    }
    selecionar(id: number): Moto {
        console.log('Logica Select')
        return new Moto()
    }
    selecionarTodos(): Array<any> {
        console.log('Logica GetAll')
        return [new Moto()]
    } 
}