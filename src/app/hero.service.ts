/**
 * Created by Monet on 2017/3/8.
 */
import { Injectable } from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    } // stub

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resole => {
            setTimeout(() => resole(this.getHeroes()),2000);
        });
    }

    getHero(id: number): Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}