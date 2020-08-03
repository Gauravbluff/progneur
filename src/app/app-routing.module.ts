import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexwhiteComponent } from './indexwhite/indexwhite.component';
import { FaqComponent } from './faq/faq.component';
import { FaqResultComponent } from './faq-result/faq-result.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { Blog2Component } from './blog2/blog2.component';


const routes: Routes = [

  { path: '', component: IndexwhiteComponent}, 
  { path: 'faq', component:  FaqComponent },
  { path: 'faq-result', component:  FaqResultComponent },
  { path: 'pricing', component:  PricingComponent },
  { path: 'blog' , component: BlogComponent },
  { path: 'blog2', component: Blog2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
