import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  filePath;

  addSupplierForm: FormGroup;
  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  phone = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder,
    private _appService: AppService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.addSupplierForm = this.formBuilder.group({
      name: this.name,
      address: this.address,
      phone: this.phone,
      email: this.email
    });
  }

  submitInfo() {
    this._appService.generatePdf(this.addSupplierForm.value).subscribe((res) => {
      if (res) {
        this.filePath = this.sanitizer.bypassSecurityTrustResourceUrl(JSON.parse(res._body).path);
      }
    });
  }
}
