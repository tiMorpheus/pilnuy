import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HowItWorksSectionComponent} from "./how-it-works-section/how-it-works-section.component";
import {PricingSectionComponent} from "./pricing-section/pricing-section.component";
import {ConnectSectionComponent} from "./connect-section/connect-section.component";
import {ContactSectionComponent} from "./contact-section/contact-section.component";
import {TestimonialSectionComponent} from "./testimonial-section/testimonial-section.component";
import {HomeSectionComponent} from "./home-section/home-section.component";
import {AboutSectionComponent} from "./about-section/about-section.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeSectionComponent },
    { path: 'about', component: AboutSectionComponent },
    { path: 'howitworks', component: HowItWorksSectionComponent },
    { path: 'pricing', component: PricingSectionComponent },
    { path: 'connect', component: ConnectSectionComponent },
    { path: 'contact', component: ContactSectionComponent },
    { path: 'testimonial', component: TestimonialSectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }