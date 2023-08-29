import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UntypedFormBuilder, UntypedFormGroup, Validators, UntypedFormControl, AbstractControl, ValidatorFn, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { PagesService } from '../../pages/pages.service'
import * as moment from 'moment';
import { TagSelectComponent } from '../../tag-select/tag-select.component'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-queryform',
  templateUrl: './queryform.component.html',
  styleUrls: ['./queryform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QueryformComponent implements OnInit {

  controlForm: UntypedFormGroup;
  tagsData = []
  aggerateData: any
  customAlertOptions = {
    cssClass: 'tag-multiple-select'
  }
  data: any;
  constructor(private pageService: PagesService, public modalController: ModalController, private fb: UntypedFormBuilder) { }


  ngOnInit() {
    this.controlForm = this.fb.group({
      title: ['', [Validators.required],[this.restrictedKeywordsValidator(['<', '>', ,'/','\\'])]],
      arugumentAxis: ['',[Validators.required],[this.restrictedKeywordsValidator(['<', '>', ,'/','\\'])]],
      // arugumentAxis: ['',[Validators.required]],
      valueAxis: ['',[Validators.required],[this.restrictedKeywordsValidator(['<', '>', ,'/','\\'])]],
      chartType: ['', Validators.required],
      processFor: ['', Validators.required],
      tags: ['', [Validators.required, this.tagValidator]],
      displayfields: ['', Validators.required],
      pointFlag: [false],
      gridFlag: [false]
    })

    this.controlForm.get('processFor').valueChanges.subscribe(val => {
      if(val == 'realtime') {
        this.controlForm.addControl('showData', new UntypedFormControl('', [Validators.required]))
        this.controlForm.addControl('lastData', new UntypedFormControl('', [Validators.required]))
        this.controlForm.addControl('startFresh', new UntypedFormControl(false))
        // this.controlForm.removeControl('queryFor')
        this.controlForm.removeControl('readFor')
        this.controlForm.removeControl('from')
        this.controlForm.removeControl('to')
        this.controlForm.removeControl('fromTime')
        this.controlForm.removeControl('toTime')
        this.controlForm.removeControl('interval')
        this.controlForm.removeControl('intervalType')
        this.controlForm.removeControl('operations')
        this.controlForm.removeControl('lastnndays') 
        this.controlForm.removeControl('hours')
        this.controlForm.removeControl('days')
        this.controlForm.removeControl('minutes')
        this.controlForm.removeControl('maxRows')
      } else {  
        this.controlForm.removeControl('showData')
        this.controlForm.removeControl('lastData')
        this.controlForm.removeControl('startFresh')
        // this.controlForm.addControl('queryFor', new FormControl(''))
        this.controlForm.addControl('readFor', new UntypedFormControl('', [Validators.required]))
        this.controlForm.get('readFor').valueChanges.subscribe(val => {
          if(val == 'process') {
            this.controlForm.addControl('interval', new UntypedFormControl('', [Validators.required]))
            this.controlForm.addControl('intervalType', new UntypedFormControl('', [Validators.required]))
            this.controlForm.addControl('operations', new UntypedFormControl('', [Validators.required]))
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
          // if(val == 'datarange') {
            this.controlForm.addControl('from', new UntypedFormControl(moment().format(), [Validators.required]))
            this.controlForm.addControl('to', new UntypedFormControl(moment().format(), [Validators.required]))
            this.controlForm.addControl('fromTime', new UntypedFormControl(moment().subtract(5, 'minutes').format(), [Validators.required]))
            this.controlForm.addControl('toTime', new UntypedFormControl(moment().format(), [Validators.required]))
              // this.controlForm.removeControl('lastnndays')
          // } else {
            // this.controlForm.addControl('lastnndays', new FormControl(''))     
        //     this.controlForm.removeControl('from')
        //     this.controlForm.removeControl('to')
        //     this.controlForm.removeControl('fromTime')
        //     this.controlForm.removeControl('toTime')
        //   }
        // })
      }
    })   
    if(this.data) {
      this.tagsData = this.data['tagsData']
      this.controlForm.setValue(this.data)
    }
  }

  dismissModal() {
    this.modalController.dismiss('',  'cancel')
  }

  restrictedKeywordsValidator(keywords: string[]): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return new Promise((resolve) => {
        const value = control.value;
        const containsRestrictedKeywords = keywords.some(keyword => value.includes(keyword));
  
        if (containsRestrictedKeywords) {
          resolve({ restrictedKeywords: true });
        } else {
          resolve(null);
        }
      });
    };
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

  

  controlFormSubmit() {
    if(this.controlForm.valid) {
      console.log("form value", this.controlForm.value)
      let postData =  this.controlForm.value
      postData['tagsData'] = this.tagsData
      if(postData.processFor == "query") {
        if(postData.queryFor == "datarange") {
          if(this.data) {
            if(postData['from'] == this.data.from) {
              postData['from'] =  postData['from']
            } else {
              postData['from'] = moment(postData['from']).format('YYYY-MM-DD')
            }
            if(postData['to'] == this.data.to) {
              postData['to'] =  postData['to']
            } else {
              postData['to'] = moment(postData['to']).format('YYYY-MM-DD')
            }
          } else {
            postData['from'] = moment(postData['from']).format('YYYY-MM-DD')
            postData['to'] = moment(postData['to']).format('YYYY-MM-DD')
          }
          if(!this.data) {
            postData['fromTime'] = moment(postData['fromTime']).format('HH:mm')
            postData['toTime'] = moment(postData['toTime']).format('HH:mm')
          }
        } 
      }
      localStorage.setItem('query', JSON.stringify(postData))
      this.modalController.dismiss(this.controlForm.value, 'submit')
    } else {
      this.controlForm.markAllAsTouched()
      //this.modalController.dismiss(this.controlForm.value, 'submit')
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
