/**
 * Created by Monet on 2017/3/7.
 */
import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls:['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    /** 把hero声明成输入属性，使用前面导入的@Input装饰器向hero属性添加注解 **/
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    save():void{
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void{
        this.location.back();
    }
}