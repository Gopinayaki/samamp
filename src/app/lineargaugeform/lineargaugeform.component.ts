import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TagSelectComponent } from '../tag-select/tag-select.component'

@Component({
  selector: 'app-lineargaugeform',
  templateUrl: './lineargaugeform.component.html',
  styleUrls: ['./lineargaugeform.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LineargaugeformComponent implements OnInit {

  @Input() data: any;
  controlForm: UntypedFormGroup;
  tagsData = []
  customAlertOptions = {
    cssClass: 'tag-select'
  }
  basicColors = [{
    name:'Red', value: 'red'
  },{
    name: 'Green', value: 'green'
  },
  {
    name: 'Yellow', value: 'yellow'
  },
  {
    name: 'Blue', value: 'royalblue'
  },
  {
    name: 'Gray', value: 'gray'
  }, {
    name: 'Purple', value: 'purple'
  }, {
    name: 'Teal', value: 'teal'
  }, {
    name: 'Navy', value: 'navy'
  }, {
    name: 'Maroon', value: 'maroon'
  },
  {
    name: 'Fuchsia', value: 'fuchsia'
  }]
  constructor(public modalController: ModalController, private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.controlForm = this.fb.group({
      title: ['', Validators.required],    
      // startvalue:['', Validators.required], 
      // endvalue:['', Validators.required], 
      tags: ['', Validators.required],
      rangeFormValue1:['', Validators.required],
      rangeToValue1:['', Validators.required],
      rangeColor1:['', Validators.required],
      rangeFormValue2:['', Validators.required],
      rangeToValue2:['', Validators.required],
      rangeColor2:['', Validators.required],
      rangeFormValue3:['', Validators.required],
      rangeToValue3:['', Validators.required],
      rangeColor3:['', Validators.required]
    })
    this.controlForm.get('rangeToValue1').valueChanges.subscribe(val => {
      this.controlForm.get('rangeFormValue2').patchValue(val)
    })
    this.controlForm.get('rangeToValue2').valueChanges.subscribe(val => {
      this.controlForm.get('rangeFormValue3').patchValue(val)
    })
    if(this.data) {
      this.tagsData = this.data['tagsData']
      this.data['tags'] = this.data['tags'][0]
      this.controlForm.patchValue(this.data)
    }
  }
  
  async addTags() {
    const modal = await this.modalController.create({
      component: TagSelectComponent,
      componentProps: {
        mode: 'single'
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
      let postData = this.controlForm.value
      postData['tags'] = [postData['tags']]
      postData['tagsData'] = this.tagsData
      this.modalController.dismiss(postData, 'submit')
    } else {
      this.controlForm.markAllAsTouched()
      // this.modalController.dismiss(this.controlForm.value, 'submit')
    }
  }

}
