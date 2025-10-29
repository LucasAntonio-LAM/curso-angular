import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  providers: [ OfertasService ],
  selector: 'app-restaurantes',
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurantes-component.html',
  styleUrl: './restaurantes-component.css'
})
export class RestaurantesComponent {
  constructor(private ofertasService: OfertasService) {

  }

  public ofertas!: any[]

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then(( ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }
}
