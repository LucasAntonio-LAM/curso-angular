import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs';

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
    
    // this.route.params.subscribe((parametro: any) => console.log(parametro), ((error: any) => console.log(error)), (() => console.log('Processamento foi classificado como concluído!')))
     
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('Processamento foi classificado como concluído!')
    // )
    //console.log('ID recuperado na rota:', this.route.snapshot.params['id'])
    // this.route.params.subscribe((parametro) => {
    //   console.log(parametro, id)
    // })
    // let tempo = interval(2000)
    //   tempo.subscribe((intervalo: number) => {
    //     console.log(intervalo)
    //   })

    //Observable (Observável)
      let meuObsesrvableTeste = new Observable((observer: Observer<number>) => {
        observer.next(1),
        observer.next(3),
        observer.complete()
      })

    //Observable (Observador)
    meuObsesrvableTeste.subscribe({
      next: (resultado: number) => console.log(resultado + 10),
      error: (erro: string) => console.log(erro),
      complete: () => console.log('Stream de eventos foi finalizada!')
    })
  }
}
