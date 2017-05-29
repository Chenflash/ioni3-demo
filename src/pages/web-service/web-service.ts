import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WebServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-web-service',
  templateUrl: 'web-service.html',
})
export class WebServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public http: Http) {
  }

  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    
    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
        console.log(data);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

}
