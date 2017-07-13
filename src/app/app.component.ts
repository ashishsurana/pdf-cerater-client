import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    addSupplierForm: FormGroup;
  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  phone = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  constructor(    private formBuilder: FormBuilder
) {
this.addSupplierForm = this.formBuilder.group({
      name: this.name,
      address: this.address,
      phone: this.phone,
      email: this.email
    });
  }

  submitInfo() {
    console.log('Submit', this.addSupplierForm.value);
  }
}
