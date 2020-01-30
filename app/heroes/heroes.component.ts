import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Race } from '../race';
import { RACES } from '../races';
import { HeroService } from '../hero.service';

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

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); //this must happen asynchronisly
  }
}
