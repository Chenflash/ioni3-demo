import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Chart } from 'chart.js';

/**
 * Generated class for the ChartsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;


  doughnutChart: any;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {


    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      options: {
        rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          cutoutPercentage: 80,
          tooltips: {
            mode: 'nearest'
          },
          title: {
            display: true,
            text: 'Consumo'
          },legend: {
           display: false
           }

      },
      data: {
        labels: ["Red"+(12/(12+19+3)*100).toFixed(0)+ "%", "Blue"+(19/(12+19+3)*100).toFixed(0)+ "%", "Yellow"+(3/(12+19+3)*100).toFixed(0)+ "%"],
        datasets: [{
          label: 'Consumo de datos',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'

          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"

          ]
        }]
      }

    });



  }

}
