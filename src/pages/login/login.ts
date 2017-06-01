import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//import {TranslateService} from '@ngx-translate/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {LoginServiceProvider} from '../../providers/login-service/login-service'
import { TabsPage } from '../tabs/tabs';
import { WebViewPage } from '../web-view/web-view';
//import { InAppBrowser } from '@ionic-native';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
//import {File} from 'ionic-native';
//import { IonicImageLoader } from 'ionic-image-loader';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[LoginServiceProvider]
})
export class LoginPage {
  private login : FormGroup;
  private dataa : any;
  loading: any;
  //  private platform: Platform;
  //declare var cordova:any;
  //public loading = Loading.create();


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private loginService:LoginServiceProvider, 
    public loadingCtrl: LoadingController/*, public platform: Platform*/) {
  	this.login = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],

    });
    //this.platform = platform;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginForm(){
  	console.log('Click login');
    console.log(this.login.value.user);
    this.showLoading();

    //this.navCtrl.present(this.loading);
  	/*this.loginService.login();*/

    this.loginService.login(this.login.value.user, this.login.value.password)
      .then(data => {
        this.dataa = data;
        console.log("User en Login:"+this.dataa.usuarioId);
        //this.loading.dismiss();
        this.hideLoading();
        if(this.dataa.usuarioId > 0){
          //this.navCtrl.push(HomePage);
          this.navCtrl.setRoot(TabsPage);
        }

      });

      console.log('Termina login');

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait..'
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  viewPage($event){
    console.log("Click view");
    this.navCtrl.push(WebViewPage);
  }

  launch(url) {
       console.log("Click view");
        /*this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });*/
    }




}
