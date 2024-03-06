import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TypeService } from '../pokemon.service'

@Component({
  selector: 'app-header-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './header-pokemon.component.html',
  styleUrl: './header-pokemon.component.scss',
})
export class HeaderPokemonComponent { 

  constructor(
    private typeService: TypeService,
  ) {}

  typesRes: Array<string>
  selectedType: Array<string>

  ngOnInit() {
    this.typeService.typeDataServ.subscribe(types => {
      // Access and use the types pokemon array
      this.typesRes = types
      console.log(this.typesRes);
    });
  }


  onTypeSelection(event: any) {
    this.selectedType = event.value;
    console.log(this.selectedType);
    this.typeService.setTypeSelected(this.selectedType); 
  }

}
