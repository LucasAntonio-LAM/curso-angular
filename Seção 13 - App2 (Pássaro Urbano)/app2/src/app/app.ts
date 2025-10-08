import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [Home, Topo, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app2');
}
