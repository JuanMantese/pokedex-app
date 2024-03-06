import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MyApiService } from 'src/services/connection';
import { TypeService } from '../pokemon.service'

@Component({
  selector: 'app-presentation-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './presentation-pokemon.component.html',
  styleUrl: './presentation-pokemon.component.scss',
})
export class PresentationPokemonComponent {

  constructor(
    private myApiService: MyApiService,
    private typeService: TypeService,
  ) {}

  pokemonsList: any = []
  typesRes: Array<string> = []
  typesSelected: Array<string> = []

  async ngOnInit() {
    
    try {
      await this.getPokemonData();
      console.log(this.pokemonsList)

      // All types in Pokemons Data
      this.typeService.setType(this.typesRes);

      // Subscribe to changes in genresSelected and trigger data refresh
      this.typeService.typeSelectedServ.subscribe(newTypeSelected => {
        this.typesSelected = newTypeSelected;
        this.getPokemonData();
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getPokemonData() {
    try {
      const dataRes = await this.myApiService.get(`v1/pokemons`);
      console.log(dataRes);

      // Information Interface for use
      this.pokemonsList = dataRes.data.map(element => {

        // Completing Types Pokemon Array 
        element.type.forEach(type => {
          // I verify that the same type is not added twice
          if (!this.typesRes.includes(type)) {
            this.typesRes.push(type)
          }
        });
        
        // Get all pokemons
        return element
      });

      // Filter based on selected types pokemons
      // If no type of pokemon selected, show all
      this.pokemonsList = this.pokemonsList.filter(element => {
        return !this.typesSelected.length || this.typesSelected.some(selectedType => element.type.includes(selectedType));
      })

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
