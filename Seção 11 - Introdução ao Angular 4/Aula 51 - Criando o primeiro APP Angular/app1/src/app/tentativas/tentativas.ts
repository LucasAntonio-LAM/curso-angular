import { Component } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  imports: [],
  standalone: true,
  templateUrl: './tentativas.html',
  styleUrl: './tentativas.css'
})
export class Tentativas {
    public coracaoVazio: string = '🤍'
    public coracaoCheio: string = '❤️'

    public coracoes: Coracao[] = [
      new Coracao(true), new Coracao(true), new Coracao(true)
    ]

    constructor() {
      console.log(this.coracoes)
    }
}
