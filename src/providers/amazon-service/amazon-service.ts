import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AmazonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AmazonServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AmazonServiceProvider Provider');
  }

}
