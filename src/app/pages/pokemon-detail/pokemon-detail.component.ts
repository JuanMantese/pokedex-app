import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/services/connection';


@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailPage { 

  constructor(
    private activatedRoute: ActivatedRoute,
    private myApiService: MyApiService,
  ) {}

  currentPokemon: any
  pokemonDetail: any


  async ngOnInit() {
    this.currentPokemon = this.activatedRoute.snapshot.params;
    console.log(this.currentPokemon);
    
    try {
      const dataRes = await this.myApiService.get(`v1/pokemons/${this.currentPokemon.name}`);
      // console.log(dataRes);
      
      this.pokemonDetail = dataRes.data
      console.log(this.pokemonDetail);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
