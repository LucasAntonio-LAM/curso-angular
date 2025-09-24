import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface {
    nomeTabela: string = ''
    
        inserir(object: T): boolean {
            console.log('logica de insert')
            return true
        }
        
        atualizar(object: T): boolean {
            console.log('Logica Update')
            return true
        }
        remover(id: number): T {
            console.log('Logica Delete')
            return Object()
        }
        selecionar(id: number): T {
            console.log('Logica Select')
            return Object()
        }
        selecionarTodos(): Array<any> {
            console.log('Logica GetAll')
            return [new Object()]
        }
}