import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LOGIN_ENV } from '@app/config'

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginServiceProvider {
  public dataa: any;

  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(user:string, password:string){
  	console.log("LOGIN URL:"+LOGIN_ENV.API_URL + "  User="+user + " password="+password);
  	var request = JSON.stringify({email: 'usuario@everis.com', password: 'Telefonica8', dispositivo: {descripcion: 'pruebas test', tipodispositivo: 'Android', versionso: '10', token: '11111'} });
  	console.log('json='+request);
  	var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise(resolve => {
      console.log("LOGIN-URL:"+LOGIN_ENV.API_URL);
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.

      //var response = this.http.post(LOGIN_ENV.API_URL, request).map(res => res.json());
      //console.log("POST WS"+response);

      this.http.post(LOGIN_ENV.API_URL, request, {headers: headers})
        .map(res => res.json())
        .subscribe(
          data => {

          	console.log("data login:"+data + " status code="+status);
          	console.log(data);
          	this.dataa= data;
          	console.log('User Id='+this.dataa.usuarioId);
            resolve(this.dataa);
        }, error => {
            console.log("Oooops!");
            //this.dataa = error;
            console.log('name='+error);
            console.log('status code='+error.status);
        });
    });
  }

}
