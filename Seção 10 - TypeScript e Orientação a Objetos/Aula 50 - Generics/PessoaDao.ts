import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Pessoa): boolean {
        console.log('Logica Update')
        return true
    }
    remover(id: number): Pessoa {
        console.log('Logica Delete')
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa {
        console.log('Logica Select')
        return new Pessoa('', '')
    }
    selecionarTodos(): Array<any> {
        console.log('Logica GetAll')
        return [new Pessoa('', '')]
    } 
}