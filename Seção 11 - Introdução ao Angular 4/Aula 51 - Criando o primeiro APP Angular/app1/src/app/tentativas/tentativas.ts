import { Component } from '@angular/core';

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
}
