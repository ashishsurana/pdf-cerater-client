import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppService } from './service/app.service';

import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AppService, ToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
