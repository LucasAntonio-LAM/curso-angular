import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Home } from './home/home';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';

@Component({
  providers: [HttpClient],
  selector: 'app-root',
  imports: [Home, Topo, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app2');
}
