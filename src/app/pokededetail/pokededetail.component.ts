import { Component, Input, OnInit } from '@angular/core';
import { PokeDetail } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-pokededetail',
  templateUrl: './pokededetail.component.html',
  styleUrls: ['./pokededetail.component.css'],
  providers: [PokeShareInfoService]
})
export class PokededetailComponent implements OnInit {

  @Input('detail')
  detail: PokeDetail;

  constructor(private pokeShareInfoService: PokeShareInfoService) { }

  ngOnInit(): void {

    console.log(this.pokeShareInfoService.getValue());
  }

}
