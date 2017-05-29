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

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public  translate: TranslateService ) {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      translate.setDefaultLang('es');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('es');
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'List REST Service', component: ListPage },
      { title: 'List DB', component: ListaDatabasePage },
      { title: 'About', component: AboutPage },
      { title: "Servicio", component: WebServicePage }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
