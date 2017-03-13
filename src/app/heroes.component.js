"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    //添加一个构造函数，并定义一个私有属性
    //添加组件的providers元数据
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n      <h1>{{title}}</h1>\n      <!-- \u8FD9\u4E2A\u7EC4\u4EF6\u88AB\u5355\u72EC\u62BD\u8C03\u51FA\u6765\n      <div *ngIf=\"selectedHero\">\n        <h2>{{selectedHero.name}} details</h2>\n        <div><label>id: </label>{{selectedHero.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n        </div>\n      </div>-->\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n        <li *ngFor=\"let hero of heros\"\n         [class.selected]=\"hero === selectedHero\"\n         (click)=\"onSelect(hero)\">\n            <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n        </li>\n      </ul>\n      <!-- my-hero-detail\u662F\u5728HeroDetailComponet\u5143\u6570\u636E\u4E2D\u7684selector\u5C5E\u6027\u6240\u6307\u5B9A\u7684\u540D\u5B57\u3002\n           \u60F3\u8981\u4E24\u4E2A\u7EC4\u4EF6\u534F\u540C\u5DE5\u4F5C\uFF0C\u628AAppComponent\u7EC4\u4EF6\u7684selector\u5C5E\u6027\u548CHeroDetailComponet\u7EC4\u4EF6\u4E2D\u7684hero\u5C5E\u6027\u7ED1\u5B9A\u3002\n       -->\n      <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n      ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map