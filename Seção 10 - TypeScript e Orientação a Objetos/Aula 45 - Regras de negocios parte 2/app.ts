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

    public dizerModelo(): string {
        return this.modelo
    }
}

class Concessionaria {
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
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro!: Carro

    constructor (nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return `Esse é o ${this.nome}`
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

/* -- Criar Carros */

let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* Montar a lista de carros da concessionaria */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* Exibir a lista de carros */

// console.log(concessionaria.mostrarListaDeCarros())

/* -- Comprar o carro -- */
let cliente = new Pessoa('Lucas', 'Dodge Journey')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(cliente.dizerCarroPreferido() === carro.dizerModelo()) {
        
        // Comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())