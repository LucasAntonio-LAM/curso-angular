import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-diversao',
  imports: [CommonModule],
  templateUrl: './diversao-component.html',
  styleUrl: './diversao-component.css',
  providers: [ OfertasService ]
})
export class DiversaoComponent {
  constructor(private ofertasService: OfertasService) {

  }

  public ofertas!: Oferta[]

  ngOnInit() {
    this.ofertasService.getDiversaoPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }
}
