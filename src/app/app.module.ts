import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HowItWorksSectionComponent } from './how-it-works-section/how-it-works-section.component';
import { ConnectSectionComponent } from './connect-section/connect-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { SocialsSectionComponent } from './socials-section/socials-section.component';
import { FooterCpComponent } from './footer-cp/footer-cp.component';
import {FormsModule} from "@angular/forms";



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    entryComponents: [HomeSectionComponent],

    declarations: [
    AppComponent,
    NavComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    HowItWorksSectionComponent,
    ConnectSectionComponent,
    PricingSectionComponent,
    TestimonialSectionComponent,
    ContactSectionComponent,
    SocialsSectionComponent,
    FooterCpComponent
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })

    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
