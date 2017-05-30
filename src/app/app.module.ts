import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { AboutPage } from "../pages/about/about";
import { MapPage }  from '../pages/map/map';
import { WebServicePage } from '../pages/web-service/web-service';
import { LoginPage} from '../pages/login/login';
import { WebViewPage } from '../pages/web-view/web-view';
import { ListAvatarsPage } from '../pages/list-avatars/list-avatars';

import {ChartsPage} from "../pages/charts/charts"

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import { IonicStorageModule } from '@ionic/storage';
import { TianguisServiceProvider } from '../providers/tianguis-service/tianguis-service';
import { ListaDatabasePage} from '../pages/lista-database/lista-database';
import { ImageLoaderPage} from  '../pages/image-loader/image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { LoginServiceProvider } from '../providers/login-service/login-service';
//import { IonicImageLoader } from 'ionic-image-loader';



export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage,
    MapPage,
    WebServicePage,
    LoginPage,
    WebViewPage,
    ListAvatarsPage,
    ChartsPage,
    ListaDatabasePage,
    ImageLoaderPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot(),
    ImageLoaderConfig,
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
    TabsPage,
    HomePage,
    ListPage,
    DetailPage,
    AboutPage,
    MapPage,
    WebServicePage,
    LoginPage,
    WebViewPage,
    ListAvatarsPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    TianguisServiceProvider,
    GoogleMaps,
    LoginServiceProvider
  ]
})
export class AppModule {}
