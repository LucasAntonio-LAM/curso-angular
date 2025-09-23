import Carro from './Carro'
import Moto from './Moto'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* -- Criar Carros */

let carro = new Carro('Veloster', 3)
carro.acelerar()


let moto =  new Moto()
moto.acelerar()
moto.acelerar()
moto.acelerar()

console.log(moto)
console.log(carro)