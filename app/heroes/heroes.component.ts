import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Race } from '../race';
import { RACES } from '../races';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  races = RACES;
  selectedRace: Race;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Legolas',
  //   race: 'elf'
  // };

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
