import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule,Http   } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicImageLoader } from 'ionic-image-loader';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import {AboutPage} from "../pages/about/about";
import {ChartsPage} from "../pages/charts/charts"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { ListaDatabasePage} from '../pages/lista-database/lista-database'
import { ImageLoaderPage} from  '../pages/image-loader/image-loader'
import { IonicStorageModule } from '@ionic/storage';



export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage,
    ChartsPage,
    ListaDatabasePage,
    ImageLoaderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage,
    ChartsPage,
    ListaDatabasePage,
    ImageLoaderPage
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
