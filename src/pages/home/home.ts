import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';

import {TranslateService} from '@ngx-translate/core';

 declare var require: any; 
 var loki = require('lokijs');



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ]
})
export class HomePage {

  langs = ['en', 'es'];
  //db: any; // LokiJS database 
  //robots: any;




  constructor(public navCtrl: NavController,
              public locationTracker: LocationTracker,
              public translate: TranslateService

             ) {

             /*this.db = new loki('robotsOnTV'); 
             this.robots = this.db.addCollection('robots');

             this.robots.insert({ name: 'Bender', tvShow: 'Futurama' }); 
             this.robots.insert({ name: 'Rosie', tvShow: 'The Jetsons' }); 
             this.robots.insert({ name: 'K1', tvShow: 'Dr. Who' });*/

  }

  start(){
    //this.logger.log.debug("Start Tracking");
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
    //this.logger.log.debug("Stop Tracking");
  }

  llenarBase(){

  }

  vaciarBase(){

  }

  convert2Array(val) {
         return Array.from(val);
     }

}
