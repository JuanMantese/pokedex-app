import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  // Total Types of Pokemons
  private typeSource = new BehaviorSubject<string[]>([]);
  typeDataServ = this.typeSource.asObservable();
  
  setType(types: string[]) {
    this.typeSource.next(types);
  }

  getType(): string[] {
    return this.typeSource.getValue();
  }

  // Type of Pokemon Selected
  private typeSelected = new BehaviorSubject<string[]>([]);
  typeSelectedServ = this.typeSelected.asObservable();
  
  setTypeSelected(typeSelect: string[]) {
    this.typeSelected.next(typeSelect);
  }

  getTypeSelected(): string[] {
    return this.typeSelected.getValue();
  }
}