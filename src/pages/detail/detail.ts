import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TianguisServiceProvider } from '../../providers/tianguis-service/tianguis-service';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  providers: [ TianguisServiceProvider ],
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tianguisService: TianguisServiceProvider) {
  }

  ionViewDidLoad() {
    this.tianguisService.postRequest()
    .then(data => {
      console.log("Data: " + data);
    });
  }

}
