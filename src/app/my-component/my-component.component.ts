import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PockeAPIServiceService} from '../pocke-apiservice.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PockeAPIServiceService] 
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPockeId : string='';
  searchPokeName = '';
  pokes : Pokemon [] = [];

  constructor(private PokeService: PockeAPIServiceService) { 
    
  }

  ngOnInit(): void {
    this.PokeService.getPokemons().subscribe((data) => {
      data.results.forEach ((e, index) => {
        this.pokes.push (new Pokemon (''+ index,e.name, e.url));

      });
    }) ;
  }

  go(){
    console.log(this.selectedPockeId);
  }

}