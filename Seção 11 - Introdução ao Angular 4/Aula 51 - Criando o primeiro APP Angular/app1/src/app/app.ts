import { Component, signal } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { Painel } from './painel/painel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopoComponent,
    Painel,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  public jogoEmAndamento: boolean = true
  public tipoEncerramento!: string

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = ''
  }
}
