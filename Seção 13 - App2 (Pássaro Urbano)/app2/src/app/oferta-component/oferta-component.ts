import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta-component',
  imports: [RouterModule],
  templateUrl: './oferta-component.html',
  styleUrl: './oferta-component.css'
})
export class OfertaComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('ID recuperado na rota:', this.route.snapshot.params['id'])
    // this.route.params.subscribe((parametro) => {
    //   console.log(parametro, id)
    // })
  }
}
