import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oferta-component',
  imports: [RouterModule, CommonModule],
  templateUrl: './oferta-component.html',
  styleUrl: './oferta-component.css',
  providers: [ OfertasService ]
})
export class OfertaComponent {

  public oferta!: Oferta
  
  constructor(private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
    //console.log('ID recuperado na rota:', this.route.snapshot.params['id'])
    // this.route.params.subscribe((parametro) => {
    //   console.log(parametro, id)
    // })
  }
}
