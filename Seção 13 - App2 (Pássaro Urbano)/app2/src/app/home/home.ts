import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
@Component({
  selector: 'app-home',
  imports: [],
  providers: [OfertasService],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {
    console.log(this.ofertasService.getOfertas())
  }
}
