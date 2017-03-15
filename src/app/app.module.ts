import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//导入web api ，http客户端从一个模拟服务中获取和保存数据
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:  [ BrowserModule, FormsModule,AppRoutingModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, HeroDetailComponent,HeroesComponent,DashboardComponent,HeroSearchComponent],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
