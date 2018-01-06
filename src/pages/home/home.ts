import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductResults } from './../../lib/models/ProductResults';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public results: Array<ProductResults>;
  public selectedSites: Array<string>;
  public isSearch: boolean;

  constructor(public navCtrl: NavController) {
    // init
    this.results = [];
    this.selectedSites = [];
    this.isSearch = false;
  }

  public search($event: any): any {

    return [];
  }
}
