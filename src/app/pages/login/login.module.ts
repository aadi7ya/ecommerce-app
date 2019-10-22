import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LoginModule { }
