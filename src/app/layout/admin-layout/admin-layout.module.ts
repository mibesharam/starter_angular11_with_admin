import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { ClientLayoutComponent } from '../client-layout/client-layout.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: AdminLayoutComponent
  }
]

@NgModule({
  declarations: [
    AdminLayoutComponent,
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminLayoutModule { }
