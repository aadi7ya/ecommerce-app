import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeTestimonialsComponent } from './home-testimonials/home-testimonials.component';
import { HomeDescriptionComponent } from './home-description/home-description.component';
import { HomeEnquiryComponent } from './home-enquiry/home-enquiry.component';
import { HomeExploreComponent } from './home-explore/home-explore.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeTestimonialsComponent,
    HomeDescriptionComponent,
    HomeEnquiryComponent,
    HomeExploreComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }
