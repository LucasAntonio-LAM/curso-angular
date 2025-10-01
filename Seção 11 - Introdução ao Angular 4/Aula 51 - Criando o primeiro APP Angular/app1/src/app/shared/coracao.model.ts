export class Coracao {
    constructor(
        public cheio: boolean, 
        public urlCoracaoCheio: string = '❤️', 
        public urlCoracaoVazio: string = '🤍'
    ) {}

    public exibeCoracao(): string {
        if(this.cheio) {
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}