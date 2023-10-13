import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path:'', component:DashboardComponent
  }
];

@NgModule({
 imports:[RouterModule.forChild(routes)],
 exports:[RouterModule]
})
export class DashboardRoutingModule { }
