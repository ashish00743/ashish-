import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { select, Store } from '@ngrx/store';
import { selectCustomers } from '../store/selector/customer.selectors';
import { CustomerState } from '../store/reducer/customer.reducer';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AddCardService } from '../add-card.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customers$: Observable<Customer[]>;
  currentDate = new Date();
  CustomerForm =  this.fb.group({
  name:['', Validators.required],
  expiryDate: [null, [Validators.required, date()]],
  creditCardnumber:['', Validators.required],
  securityCode:[null, [securityCode(3)]],
  amount: [null,  [amount()]]
  });
  customerList: Customer[];

  constructor(private store: Store<CustomerState>, private fb: FormBuilder, private customerService:AddCardService) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
    this.customers$.subscribe(item=>{
      this.customerList = item;
    })
  }

  onSubmit(){
    this.customerService.addCard(this.CustomerForm.value);
    this.CustomerForm.reset()

  }
 
 
}
function  date(){      //factory function
  return (control: AbstractControl):{[key: string]: boolean} | null => {
  if( control.value !==null && (new Date(control.value) < new Date())){
    return {'expiryDate': true}
  }
  return null;
};
}
function  amount(){      //factory function
  return (control: AbstractControl):{[key: string]: boolean} | null => {
  if( control.value !==null && (control.value === 0)){
    return {'amount': true}
  }
  return null;
};
}
function  securityCode(maxLength: number){      //factory function
  return (control: AbstractControl):{[key: string]: boolean} | null => {
  if( control.value !==null && ((control.value.toString()).length != 3 )){
    return {'securityCode': true}
  }
  return null;
};
}
