import { Routes } from '@angular/router';
import { PokemonPage } from './pages/pokemon/pokemon.component';
import { PokemonDetailPage } from './pages/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    { path: '', component: PokemonPage, children: [] },
    { path: ':name', component: PokemonDetailPage, children: [] },
];
