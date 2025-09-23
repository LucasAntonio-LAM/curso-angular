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
