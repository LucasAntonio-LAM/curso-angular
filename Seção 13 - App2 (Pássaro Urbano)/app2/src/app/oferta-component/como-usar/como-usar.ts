import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-como-usar',
  imports: [],
  templateUrl: './como-usar.html',
  styleUrl: './como-usar.css'
})
export class ComoUsar {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('ID da ROTA PAI: ', this.route.parent?.snapshot.params['id'])
  }
}
