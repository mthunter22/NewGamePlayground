import { Component, OnInit } from '@angular/core';
import { CARDS } from '../cards';
import { Card } from '../card';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  cards = CARDS;

  constructor() { }

  ngOnInit() {

  }

}
