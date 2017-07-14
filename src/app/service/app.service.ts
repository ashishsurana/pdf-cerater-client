import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: Http) { }

  generatePdf(user): Observable<any> {
    return this.http.post(this.baseUrl + 'api/v1/info/', user, this.options);
  }

}
