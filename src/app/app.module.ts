import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { FaqResultComponent } from './faq-result/faq-result.component';
import { IndexwhiteComponent } from './indexwhite/indexwhite.component';
import { OfferComponent } from './offer/offer.component';
import { OwnerviewComponent } from './ownerview/ownerview.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { Blog2Component } from './blog2/blog2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    FaqResultComponent,
    IndexwhiteComponent,
    OfferComponent,
    OwnerviewComponent,
    PricingComponent,
    BlogComponent,
    Blog2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
