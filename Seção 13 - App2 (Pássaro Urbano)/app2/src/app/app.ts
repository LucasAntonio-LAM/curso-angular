import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Home } from './home/home';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';
import { RestaurantesComponent } from './restaurantes-component/restaurantes-component';
import { DiversaoComponent } from './diversao-component/diversao-component';

@Component({
  providers: [HttpClient],
  selector: 'app-root',
  imports: [Home, Topo, Rodape, RestaurantesComponent, DiversaoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app2');
}
