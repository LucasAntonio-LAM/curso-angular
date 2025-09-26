import { Component, signal } from '@angular/core';
import { TopoComponent } from './topo/topo.component';
import { Painel } from './painel/painel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopoComponent,
    Painel,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app1');
}
