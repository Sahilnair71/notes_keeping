import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Server } from 'selenium-webdriver/safari';


const routes: Routes = [
  {
    path:"",
    component:StartComponent},
  {path:"home",
component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
