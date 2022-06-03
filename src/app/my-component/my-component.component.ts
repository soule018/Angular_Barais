import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  pokes : Pokemon[]= [];

  constructor() { 
    this.pokes.push (new Pokemon('1', 'Pickachu'));
    this.pokes.push (new Pokemon('2', '	Méga-Florizarre'));
    this.pokes.push (new Pokemon('3', '	Salamèche'));
    this.pokes.push (new Pokemon('4', 'Reptincelu'));
    this.pokes.push (new Pokemon('5', 'Dracaufeu'));
}

  ngOnInit(): void {
  }

}
