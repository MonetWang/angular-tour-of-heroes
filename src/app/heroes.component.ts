import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    template: `
      <h1>{{title}}</h1>
      <!-- 这个组件被单独抽调出来
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
      </div>-->
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heros"
         [class.selected]="hero === selectedHero"
         (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <!-- my-hero-detail是在HeroDetailComponet元数据中的selector属性所指定的名字。
           想要两个组件协同工作，把AppComponent组件的selector属性和HeroDetailComponet组件中的hero属性绑定。
       -->
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>
      `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero:Hero;

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



