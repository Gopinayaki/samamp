import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {

  noOfDecimal: any;
  timeFormat: any;
  tagsNumber: any;
  graphicsUrl: any;
  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  ionViewWillEnter() {
    if(localStorage.getItem('noOfDecimal')) {
      this.noOfDecimal = Number(localStorage.getItem('noOfDecimal'))
    }

    if(localStorage.getItem('timeFormat')) {
      this.timeFormat = localStorage.getItem('timeFormat')
    }

    if(localStorage.getItem('tagsNumber')) {
      this.tagsNumber = Number(localStorage.getItem('tagsNumber'))
    }

    if(localStorage.getItem('graphicsUrl')) {
      this.graphicsUrl = localStorage.getItem('graphicsUrl')
    }
  }

  save() {
    console.log("save decimal point", this.noOfDecimal)
    if(this.noOfDecimal) {
      localStorage.setItem('noOfDecimal', ''+this.noOfDecimal)
    }
    if(this.timeFormat) {
      localStorage.setItem('timeFormat', this.timeFormat)
    }
    if(this.tagsNumber) {
      localStorage.setItem('tagsNumber', this.tagsNumber)
    }
    if(this.graphicsUrl) {
      localStorage.setItem('graphicsUrl', this.graphicsUrl)
    }
    this.presentToast('Setting Save Successfully')
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
