import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { LandingPageComponent } from './customer/landing-page/landing-page.component';
import { PageNotFoundComponentComponent } from './customer/page-not-found-component/page-not-found-component.component';

const routes: Routes = [{ path: 'customer', component: CustomerViewComponent },
{ path: 'landingpage', component: LandingPageComponent },
{ path: '', redirectTo: 'landingpage', pathMatch: 'full'},
//wildcardRoute
// 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
