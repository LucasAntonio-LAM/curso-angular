import { ConcessionariaInterface } from './ConcessionariaInterface'
import Carro from './Carro'
import { listaDeCarros } from './app'

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listadeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return `De segunda á sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00`
    }
}