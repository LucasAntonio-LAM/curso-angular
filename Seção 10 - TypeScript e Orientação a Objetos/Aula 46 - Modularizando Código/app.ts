import  Carro  from './Carro'
import  Pessoa  from './Pessoa'
import  Concessionaria  from './Concessionaria'

/* -- Criar Carros */

let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* Montar a lista de carros da concessionaria */

export let listaDeCarros: Carro[] = [carroA, carroB, carroC]

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