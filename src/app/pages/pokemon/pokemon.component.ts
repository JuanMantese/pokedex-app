import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderPokemonComponent } from './header-pokemon/header-pokemon.component';
import { PresentationPokemonComponent } from './presentation-pokemon/presentation-pokemon.component';



@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    HeaderPokemonComponent,
    PresentationPokemonComponent
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonPage { 

}
