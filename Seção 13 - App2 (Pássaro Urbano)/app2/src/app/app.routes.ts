import { Routes } from '@angular/router';



import { Home } from './home/home';
import { RestaurantesComponent } from './restaurantes-component/restaurantes-component';
import { DiversaoComponent } from './diversao-component/diversao-component';
import { OfertaComponent } from './oferta-component/oferta-component';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'oferta', component: Home},
    {path: 'oferta/:id', component: OfertaComponent}
];

