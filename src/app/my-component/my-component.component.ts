import { Component, OnInit } from '@angular/core';
import { Pokemon,PokeDetail } from '../pokemon';
import { PokeAPIServiceService } from '../pocke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPockeId : string;
  searchPokeName = '';
  pokes : Pokemon [] = [];
  pokeDetail : PokeDetail;

  constructor( private pokeService: PokeAPIServiceService,
    private pokeShareInfoService: PokeShareInfoService
    ) { 
    /*this.pok.push (new Pokemon ('1','Reptincel'));
    this.pok.push (new Pokemon ('2','Bulbizarre'));
    this.pok.push (new Pokemon ('3','Herbizarre'));
    this.pok.push (new Pokemon ('4','Florizarre'));
    this.pok.push (new Pokemon ('5','Salamèche'));*/
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {

     

      data.results.forEach ((e, index) => {
        this.pokes.push (new Pokemon (''+index,e.name,e.url));

      });
    }) ;
  }
  go(){
    //this.pokeShareInfoService.setValue(this.selectedPockeId)

    if(this.selectedPockeId !='' ){
      
      this.pokeService.getPokemonInfo(this.selectedPockeId).subscribe(data => this.pokeDetail=data);
      this.pokeShareInfoService.setValue(this.selectedPockeId);
    };
  }

}