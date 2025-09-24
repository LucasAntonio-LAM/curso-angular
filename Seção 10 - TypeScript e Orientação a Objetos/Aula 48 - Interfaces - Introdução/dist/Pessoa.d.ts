import Carro from './Carro';
export default class Pessoa {
    private nome;
    private carroPreferido;
    private carro;
    constructor(nome: string, carroPreferido: string);
    dizerNome(): string;
    dizerCarroPreferido(): string;
    comprarCarro(carro: Carro): void;
    dizerCarroQueTem(): Carro;
}
//# sourceMappingURL=Pessoa.d.ts.map