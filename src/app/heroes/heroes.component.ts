import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService}  from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroList : Hero[];
  selectedHero :Hero;
  newHero = new Hero();

  onSelectHero(hero:Hero):void{
    this.selectedHero = hero;
  }

  submitNewHero():void{
    this.heroList.push(this.newHero);
  }

  getHeroes():void {
    this.heroList = this.heroService.getHeroesList()
  }
}
