import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {StoreModule} from '@ngrx/store';
6
import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';
@NgModule({
  declarations: [CustomerViewComponent, PageNotFoundComponentComponent, LandingPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [
        CustomerViewComponent,
        PageNotFoundComponentComponent
  ]
})
export class CustomerModule { }
