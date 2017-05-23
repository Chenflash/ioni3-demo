import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';

import {TranslateService} from '@ngx-translate/core';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ]
})
export class HomePage {

  langs = ['en', 'es'];

 


  constructor(public navCtrl: NavController,
              public locationTracker: LocationTracker,
              public translate: TranslateService

             ) {

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

}
