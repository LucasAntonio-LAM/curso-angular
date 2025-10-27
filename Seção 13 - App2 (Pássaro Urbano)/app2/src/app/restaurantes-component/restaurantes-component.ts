import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';


@Component({
  providers: [ OfertasService ],
  selector: 'app-restaurantes',
  imports: [],
  templateUrl: './restaurantes-component.html',
  styleUrl: './restaurantes-component.css'
})
export class RestaurantesComponent {
  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then(( ofertas: Oferta[]) => {
        console.log(ofertas)
      })
  }
}
