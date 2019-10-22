import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProfileModule { }
