import Carro from './Carro'
import Moto from './Moto'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


/* -- Criar Carros */
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* Montar a lista de carros da concessionaria */

export let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let carro = new Carro('Veloster', 3)
carro.acelerar()


let moto =  new Moto()
moto.acelerar()
moto.acelerar()
moto.acelerar()

console.log(moto)
console.log(carro)