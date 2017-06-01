import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';
import { ToastController } from 'ionic-angular';

 declare var require: any; 
 var loki = require('lokijs');
 var localforage = require('localforage');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ]
})
export class HomePage {

  langs = ['en', 'es'];
  public base64Image: string;
  db: any;
  collection: any;

  constructor(public navCtrl: NavController,
              public locationTracker: LocationTracker,
              public translate: TranslateService,
              private camera: Camera,
              public toastCtrl: ToastController
             ) {
               this.db = new loki('cameraDB');
               this.collection = this.db.addCollection('images');
             }
  //db: any; // LokiJS database 
  //robots: any;

             /*this.db = new loki('robotsOnTV'); 
             this.robots = this.db.addCollection('robots');

             this.robots.insert({ name: 'Bender', tvShow: 'Futurama' }); 
             this.robots.insert({ name: 'Rosie', tvShow: 'The Jetsons' }); 
             this.robots.insert({ name: 'K1', tvShow: 'Dr. Who' });*/

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

  takePhoto() {
    console.log("Camera. Take photo");
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true
    } 

    var self = this;
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.base64Image = 'data:image/jpeg;base64,' + imageData;

    self.collection.insert({ photo: this.base64Image});
    localforage.setItem('storeKey', JSON.stringify(self.db))
        .then(function (value) {
          let toast = self.toastCtrl.create({
          message: 'Foto guardada con éxito.',
          duration: 3000
          });
          toast.present();
          console.log('database successfully saved');
       }).catch(function(err) {
         let toast = self.toastCtrl.create({
          message: 'Error DB.',
          duration: 3000
          });
          toast.present();
         console.log('error while saving: ' + err); });

    }, (err) => {
    // Handle error
    console.log('Camera. Error: ' + err);
    });
     }

}
