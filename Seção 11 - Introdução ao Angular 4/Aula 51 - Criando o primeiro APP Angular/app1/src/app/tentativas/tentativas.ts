import { Component, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tentativas',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tentativas.html',
  styleUrl: './tentativas.css'
})
export class Tentativas {
    @Input() public tentativas!: number

    public coracoes: Coracao[] = [
      new Coracao(true), new Coracao(true), new Coracao(true)
    ]

    constructor() {
      
    }

    ngOnInit() {
      console.log('Tentativas recebidas do painel: ', this.tentativas)
    }
}
