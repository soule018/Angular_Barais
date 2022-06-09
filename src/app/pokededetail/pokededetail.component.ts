import { Component, Input, OnInit } from '@angular/core';
import { PokeDetail } from '../pokemon';

@Component({
  selector: 'app-pokededetail',
  templateUrl: './pokededetail.component.html',
  styleUrls: ['./pokededetail.component.css']
})
export class PokededetailComponent implements OnInit {

  @Input('detail')
  detail: PokeDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
