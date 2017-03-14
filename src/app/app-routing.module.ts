/**
 * Created by Monet on 2017/3/9.
 * 路由设置
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
    { path:'', redirectTo:'/dashboard', pathMatch:'full' },
    { path:'dashboard',component:DashboardComponent },
    { path:'detail/:id',component:HeroDetailComponent }, //参数化路由
    { path:'heroes',component:HeroesComponent }
];

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[ RouterModule ]
})
export class AppRoutingModule{}