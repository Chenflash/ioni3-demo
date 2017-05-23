import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import {LoggerService} from '../../providers/logs-service/logger-service';
import {Logger} from 'angular2-logger/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ LoggerService, Logger]
})
export class HomePage {

  langs = ['en', 'es'];

  constructor(public navCtrl: NavController,
              public locationTracker: LocationTracker,
              private logger: LoggerService,

             ) {

  }

  start(){
    this.logger.log.debug("Start Tracking");
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
    this.logger.log.debug("Stop Tracking");
  }

}
