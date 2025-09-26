import { Component } from '@angular/core';
import { Progresso } from '../progresso/progresso';
import { Tentativas } from '../tentativas/tentativas';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [Progresso, Tentativas],
  templateUrl: './painel.html',
  styleUrl: './painel.css'
})
export class Painel {

}
