import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';
@Component({
  selector: 'app-como-usar',
  imports: [],
  templateUrl: './como-usar.html',
  styleUrl: './como-usar.css',
  providers: [ OfertasService ]
})
export class ComoUsar {

  public comoUsar: string = ''

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
      .then((resposta: string) => { this.comoUsar = resposta})
  }
}
