var Carro = /** @class */ (function () {
    function Carro(modelo, numerodePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numerodePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listadeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return "Esse \u00E9 o ".concat(this.nome);
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return "O carro preferido de ".concat(this.nome, " \u00E9 ").concat(this.carroPreferido);
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return "O carro que ".concat(this.nome, " tem \u00E9 ").concat(this.carro);
    };
    return Pessoa;
}());
/* -- Criar Carros */
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Cerato', 4);
/* Montar a lista de carros da concessionaria */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/* Exibir a lista de carros */
console.log(concessionaria.mostrarListaDeCarros());
