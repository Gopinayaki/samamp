import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-single-view-control',
  templateUrl: './single-view-control.component.html',
  styleUrls: ['./single-view-control.component.scss'],
})
export class SingleViewControlComponent implements OnInit {

  @Input() data: any; 
  constructor(public modalController: ModalController, private screenOrientation: ScreenOrientation) { 
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    console.log('single view data', this.data);
  }

  dismissModal() {
    this.modalController.dismiss('',  'cancel')
  }

  ngOnDestroy() {
    // this.screenOrientation.unlock();
  }

  pause(data) {
    data['zoom'] = true;
  }

  play(data) {
    data['zoom'] = false;
  }

}
