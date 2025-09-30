import { Component } from '@angular/core';
import { Progresso } from '../progresso/progresso';
import { Tentativas } from '../tentativas/tentativas';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [Progresso, Tentativas],
  templateUrl: './painel.html',
  styleUrl: './painel.css'
})
export class Painel {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log('Verificar resposta', this.resposta)
  }
}
