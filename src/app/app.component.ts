import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AboutPage } from "../pages/about/about";
import { ListaDatabasePage } from "../pages/lista-database/lista-database";
import { WebServicePage } from "../pages/web-service/web-service";
import { TranslateService } from "@ngx-translate/core";
import {ChartsPage} from '../pages/charts/charts';
import {ImageLoaderPage} from '../pages/image-loader/image-loader';


import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import { ImageLoaderConfig } from 'ionic-image-loader';
import { ListAvatarsPage } from '../pages/list-avatars/list-avatars';

var loki = require('lokijs');
var localforage = require('localforage');

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = TabsPage;
  //rootPage: any = HomePage;
  rootPage: any = LoginPage;

  db: any;
  collection: any;
  profileImage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public  translate: TranslateService ) {


    this.db = new loki('cameraDB');
    var self = this;

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      translate.setDefaultLang('es');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('es');

      this.db = new loki('cameraDB');
      localforage.getItem('storeKey')
      .then(function(value) {
      self.db.loadJSON(value);
      self.collection = self.db.getCollection('images');
      if (self.collection != null) {
        self.profileImage = self.collection.get(1).photo;
      }
      })
      .catch(function(err) {
      console.log('App. Error importing database: ' + err); });

    });


     /*// disable spinners by default, you can add [spinner]="true" to a specific component instance later on to override this
    imageLoaderConfig.enableSpinner(false);
    
    // set the maximum concurrent connections to 10
    imageLoaderConfig.setConcurrency(10);*/






    // enable debug mode to get console logs and stuff
    // imageLoaderConfig.enableDebugMode();
    // // set a fallback url to use by default in case an image is not found
    // imageLoaderConfig.setFallbackUrl('assets/fallback.png');

    // imageLoaderConfig.setImageReturnType('base64');

    // imageLoaderConfig.setSpinnerColor('secondary');
    // imageLoaderConfig.setSpinnerName('bubbles');


    // imageLoaderConfig.maxCacheSize = 2 * 1024 * 1024; // 2 MB
    // imageLoaderConfig.maxCacheAge = 60 * 1000; // 1 minute


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'List REST Service', component: ListPage },
      { title: 'List DB', component: ListaDatabasePage },
      { title: 'About', component: AboutPage },
      { title: "Servicio", component: WebServicePage },
      { title: 'Lista Avatars', component: ListAvatarsPage },
      {title: 'Charts', component:ChartsPage},
      {title: 'ImageLoader', component:ImageLoaderPage}
      
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
