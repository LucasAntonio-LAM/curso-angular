import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  imports: [],
  templateUrl: './onde-fica.html',
  styleUrl: './onde-fica.css'
})
export class OndeFica {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('ID da ROTA PAI: ', this.route.parent?.snapshot.params['id'])
  }
}
