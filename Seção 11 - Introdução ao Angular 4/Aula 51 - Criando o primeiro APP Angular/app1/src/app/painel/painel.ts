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
  public rodadaFrase!: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log(this.tentativas)
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')

        // Trocar pergunta da rodada
        this.rodada++

        // Atualizar a barra de progresso
        this.progresso = this.progresso + (100 / this.frases.length)
        console.log(this.progresso)

        // Atualiza o objeto rodadaFrase e limpar a resposta
        this.atualizaRodada()

    } else {
      // Diminuir a variável tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        alert('Você perdeu todas as tentativas!')
      }
    }
    console.log(this.tentativas)
  }

  public atualizaRodada(): void {

    // Define a frase da rodada com base me alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    // Limpar a resposta
    this.resposta = ''
  }
}
