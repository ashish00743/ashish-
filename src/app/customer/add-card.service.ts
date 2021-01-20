import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../models/customer';
import { addCustomer } from './store/action/customer.actions';
import { CustomerState } from './store/reducer/customer.reducer';
@Injectable({
  providedIn: 'root'
})
export class AddCardService {

  constructor(private store: Store<CustomerState>) {
  }

  addCard(customer: Customer){
    this.store.dispatch(addCustomer(customer));
  }
}
