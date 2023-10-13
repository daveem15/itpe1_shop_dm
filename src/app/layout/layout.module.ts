import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { sanitizeIdentifier } from '@angular/compiler';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent, 
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ]
})
export class LayoutModule { }
