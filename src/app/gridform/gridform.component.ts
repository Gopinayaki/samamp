import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UntypedFormBuilder, UntypedFormGroup, AbstractControl, UntypedFormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TagSelectComponent } from '../tag-select/tag-select.component'
import { PagesService } from '../pages/pages.service';

@Component({
  selector: 'app-gridform',
  templateUrl: './gridform.component.html',
  styleUrls: ['./gridform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridformComponent implements OnInit {

    now: Date = new Date();

  @Input() data: any;
  controlForm: UntypedFormGroup;
  tagsData = [];
  aggerateData: any;
  customAlertOptions = {
    cssClass: 'tag-multiple-select'
  }
  items = [];
  
  constructor(public modalController: ModalController, private fb: UntypedFormBuilder,private pageService: PagesService) { }

  ngOnInit() {
    this.controlForm = this.fb.group({
      title: ['', Validators.required],     
      processFor: ['', Validators.required],
      displayfields: ['', Validators.required],
      tags: ['', [Validators.required]]
    })
    this.controlForm.get('processFor').valueChanges.subscribe(val => {
      if(val == 'realtime') {
        // this.controlForm.removeControl('queryFor')
        this.controlForm.removeControl('readFor')
        this.controlForm.removeControl('from')
        this.controlForm.removeControl('to')
        this.controlForm.removeControl('fromTime')
        this.controlForm.removeControl('toTime')
        this.controlForm.removeControl('operations')
        this.controlForm.removeControl('interval')
        this.controlForm.removeControl('intervalType')
        // this.controlForm.removeControl('minutes')
        // this.controlForm.removeControl('hours')
        // this.controlForm.removeControl('days')
        this.controlForm.removeControl('lastnndays')
        this.controlForm.removeControl('maxRows')
      } else {
        // this.controlForm.addControl('queryFor', new FormControl(''))
        this.controlForm.addControl('readFor', new UntypedFormControl('', [Validators.required]))
        this.controlForm.get('readFor').valueChanges.subscribe(val => {
          if(val == 'process') {
            this.controlForm.addControl('interval', new UntypedFormControl('', [Validators.required]))
            this.controlForm.addControl('intervalType', new UntypedFormControl('', [Validators.required]))
            this.controlForm.addControl('operations', new UntypedFormControl('Start', [Validators.required]))
            // this.controlForm.addControl('operations', new FormControl(''))
            // this.controlForm.get('interval').valueChanges.subscribe(val => {
            //   if(val == 'minutes') {
            //     this.controlForm.addControl('minutes', new FormControl(''))
            //     this.controlForm.removeControl('hours')
            //     this.controlForm.removeControl('days')
            //   } else if (val == 'days') { 
            //     this.controlForm.addControl('days', new FormControl(''))
            //     this.controlForm.removeControl('minutes')
            //     this.controlForm.removeControl('hours')
            //   } else {
            //     this.controlForm.addControl('hours', new FormControl(''))
            //     this.controlForm.removeControl('minutes')
            //     this.controlForm.removeControl('days')
            //   }
            // })
            this.controlForm.removeControl('maxRows')
          } else {
            this.controlForm.addControl('maxRows', new UntypedFormControl('', [Validators.required]))
            this.controlForm.removeControl('interval')
            this.controlForm.removeControl('intervalType')
            this.controlForm.removeControl('operations')
            // this.controlForm.removeControl('minutes')
            // this.controlForm.removeControl('hours')
            // this.controlForm.removeControl('days')
          }
        })
        // this.controlForm.get('queryFor').valueChanges.subscribe(val => {
        //   console.log("--------", val)
          // if(val == 'datarange') {
            this.controlForm.addControl('from', new UntypedFormControl(moment().format(), [Validators.required]))
            this.controlForm.addControl('to', new UntypedFormControl(moment().format(), [Validators.required]))
            this.controlForm.addControl('fromTime', new UntypedFormControl(moment().subtract(5, 'minutes').format(), [Validators.required]))
            this.controlForm.addControl('toTime', new UntypedFormControl(moment().format(), [Validators.required]))
          //   this.controlForm.removeControl('lastnndays')
          // } else {
            // this.controlForm.addControl('lastnndays', new FormControl(''))
            // this.controlForm.removeControl('from')
            // this.controlForm.removeControl('to')
            // this.controlForm.removeControl('fromTime')
            // this.controlForm.removeControl('toTime')
          // }
        // })
      }
    })
    this.controlForm.get('displayfields').valueChanges.subscribe(val => {
      this.items = val
    })
    if(this.data) {
      console.log("edit data", this.data)
      this.tagsData = this.data['tagsData']
      this.controlForm.patchValue(this.data)
    }
    // console.log("abc",this.aggerateData);
    this.pageService.GetAggreates().subscribe((data: any) => {
      this.aggerateData = JSON.parse(data);
      console.log("get all operations",this.aggerateData);
    })
  }

  reorderItems(ev) {
    const itemMove = this.items.splice(ev.detail.from, 1)[0];
    this.items.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }

  async addTags() {
    const modal = await this.modalController.create({
      component: TagSelectComponent,
      componentProps: {
        mode: 'multiple'
      }
    });
    modal.onDidDismiss().then((submitData) => {
      console.log("grid dismiss data", submitData)
      if(submitData.role == 'submit') {
        if(submitData.data.length != 0) {
          this.tagsData = submitData.data
          setTimeout(() => {
            this.controlForm.get('tags').patchValue(submitData.data.map(data => data['TagName']))
          })
        }
      }
    })
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss('',  'cancel')
  }

  controlFormSubmit() {
    if(this.controlForm.valid) {
      //console.log("form value", this.controlForm.value)
      let postData = this.controlForm.value
      postData['tagsData'] = this.tagsData
      postData['orderItem'] = this.items
      // if(postData.processFor == "query") {
      //   if(postData.queryFor == "datarange") {
      //     if(this.data) {
      //       if(postData['from'] == this.data.from) {
      //         postData['from'] =  postData['from']
      //       } else {
      //         postData['from'] = moment(postData['from']).format('YYYY-MM-DD')
      //       }
      //       if(postData['to'] == this.data.to) {
      //         postData['to'] =  postData['to']
      //       } else {
      //         postData['to'] = moment(postData['to']).format('YYYY-MM-DD')
      //       }
      //     } else {
      //       postData['from'] = moment(postData['from']).format('YYYY-MM-DD')
      //       postData['to'] = moment(postData['to']).format('YYYY-MM-DD')
      //     }
      //     if(!this.data) {
      //       postData['fromTime'] = moment(postData['fromTime']).format('HH:mm')
      //       postData['toTime'] = moment(postData['toTime']).format('HH:mm')
      //     }
      //   } 
      // }
      console.log("form value", postData, this.items)
      this.modalController.dismiss(postData, 'submit')
    } else {
      this.controlForm.markAllAsTouched()
      // this.modalController.dismiss(this.controlForm.value, 'submit')
    }
  }

  tagValidator(control: AbstractControl) {
    // console.log("valid value", control)
    if(localStorage.getItem('tagsNumber')) {
      let num = Number(localStorage.getItem('tagsNumber'))
      if(control.value.length > num) {
        return { tagLength : true}
      } else {
        return null
      } 
    } else {
      return null
    }
  }


}
