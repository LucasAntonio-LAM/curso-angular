import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  imports: [],
  providers: [OfertasService],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  public ofertas!: Oferta[]

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas()
    console.log(this.ofertas)
  }
}
