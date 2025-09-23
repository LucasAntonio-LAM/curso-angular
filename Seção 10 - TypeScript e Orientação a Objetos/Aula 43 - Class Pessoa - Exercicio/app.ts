class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numerodePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numerodePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor (nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return `Esse é o ${this.nome}`
    }

    public dizerCarroPreferido(): string {
        return `O carro preferido de ${this.nome} é ${this.carroPreferido}`
    }

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return `O carro que ${this.nome} tem é ${this.carro}`
    }
}

let pessoa = new Pessoa('Lucas', 'Corsa')
console.log(pessoa.dizerCarroPreferido())