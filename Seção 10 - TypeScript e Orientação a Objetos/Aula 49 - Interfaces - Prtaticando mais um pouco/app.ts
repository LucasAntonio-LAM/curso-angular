import Carro from './Carro'
import Moto from './Moto'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'
import { ConcessionariaDao } from './ConcessionariaDao'
import { PessoaDao } from './PessoaDao'
import { MotoDao } from './DaoMoto'
import { CarroDao } from './DaoCarro'


/* -- Criar Carros */
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* Montar a lista de carros da concessionaria */

export let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let carro = new Carro('Veloster', 3)
carro.acelerar()

console.log(carro)

let dao: MotoDao = new MotoDao()
let moto: Moto = new Moto()
dao.inserir(moto)