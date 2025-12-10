import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topo',
  imports: [RouterModule],
  templateUrl: './topo.html',
  styleUrl: './topo.css'
})
export class Topo {

  public pesquisa(event: Event): void {
    console.log((<HTMLInputElement>event.target).value)
  }
}
