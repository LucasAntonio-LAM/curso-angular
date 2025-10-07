import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Topo, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app2');
}
