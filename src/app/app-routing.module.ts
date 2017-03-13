/**
 * Created by wangmengni on 2017/3/9.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
    { path:'', redirectTo:'/dashboard', pathMatch:'dull' },
    { path:'dashboard',component:DashboardComponent },
    { path:'detail/:id',component:HeroDetailComponent },
    { path:'heroes',component:HeroesComponent }
];

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[ RouterModule ]
})
export class AppRoutingModule{}