import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroList';  

@Injectable()
export class HeroService {

  constructor() { }

  getHeroesList(): Hero[]{
    return HEROES;
  }

}
