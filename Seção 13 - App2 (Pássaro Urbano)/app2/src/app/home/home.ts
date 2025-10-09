import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  providers: [OfertasService],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  public ofertas!: Oferta[]

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)

    this.ofertasService.getOfertas2()
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas
      })
  }
}
