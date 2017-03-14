import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl:'/app/heroes.component.html',
    styles: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    //添加一个构造函数，并定义一个私有属性
    //添加组件的providers元数据
    constructor(private router:Router,private heroService:HeroService){}

    getHeroes():void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void{
        this.getHeroes();
    }

    onSelect(hero:Hero):void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}



