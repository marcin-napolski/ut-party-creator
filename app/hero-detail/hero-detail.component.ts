import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';


// This component simply receives a hero object through its hero property and displays it.
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
