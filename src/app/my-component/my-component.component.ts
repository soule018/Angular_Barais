import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPockeId : string='';
  searchPokeName = '';
  pokes : Pokemon [] = [];

  constructor() { 
    this.pokes.push (new Pokemon ('1','Pikachu'));
    this.pokes.push (new Pokemon ('2','Bulbasaur'));
    this.pokes.push (new Pokemon ('3','ivysaur'));
    this.pokes.push (new Pokemon ('4','venusaur'));
    this.pokes.push (new Pokemon ('5','charmander'));
  }

  ngOnInit(): void {
  }

}