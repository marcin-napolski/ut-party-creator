import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'; // Observable is one of the key classes in the RxJS library.

import { Hero } from './hero';
import { HEROES } from './mock-heroes2';
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private heroService: HeroService) { }

  //getHeroes(): Hero[] {
  //  return HEROES;
  //}
  getHeroes(): Observable<Hero[]> {   // observable will be returned
    return of(HEROES);  // emits single value
  }
}
