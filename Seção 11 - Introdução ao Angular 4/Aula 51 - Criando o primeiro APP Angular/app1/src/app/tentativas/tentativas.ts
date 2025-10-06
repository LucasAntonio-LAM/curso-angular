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

    ngOnChanges() {
      // This.tentativas
      // this.coracoes.length

      if(this.tentativas !== this.coracoes.length) {
        let indice = this.coracoes.length - this.tentativas
        this.coracoes[indice - 1].cheio = false
      }
    }

    ngOnInit() {
      
    }
    
}
