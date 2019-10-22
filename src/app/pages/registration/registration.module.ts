import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: "",
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RegistrationModule { }
