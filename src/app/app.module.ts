import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import {AboutPage} from "../pages/about/about";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';


import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage
  ],
  providers: [
    Storage,
    LocationTracker,
    BackgroundGeolocation,
    Geolocation,
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
