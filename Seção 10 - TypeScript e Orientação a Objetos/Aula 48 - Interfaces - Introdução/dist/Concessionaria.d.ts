import { ConcessionariaInterface } from './ConcessionariaInterface';
import Carro from './Carro';
export default class Concessionaria implements ConcessionariaInterface {
    private endereco;
    private listaDeCarros;
    constructor(endereco: string, listadeCarros: Carro[]);
    fornecerEndereco(): string;
    mostrarListaDeCarros(): Carro[];
    fornecerHorarioDeFuncionamento(): string;
}
//# sourceMappingURL=Concessionaria.d.ts.map