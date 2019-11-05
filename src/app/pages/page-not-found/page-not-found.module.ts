import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PageNotFoundModule { }
