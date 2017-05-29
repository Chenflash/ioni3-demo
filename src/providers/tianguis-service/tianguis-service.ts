import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/config'
// import { Persona } from "../../models/Personas";
// import { Direccion } from "../../models/Direccion";

/*
https://tianguis2017.azurewebsites.net/WebService.asmx/getRegistroById
{
"registroId":"57852.1"
}
{"Content-Type":"application/json"}
*/

@Injectable()
export class TianguisServiceProvider {
  public data: any;

  constructor(public http: Http) {
    console.log('Hello TianguisServiceProvider Provider');
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

    return new Promise(resolve => {
      this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
        console.log(data);
        resolve(data);
       });
    });
  }
}