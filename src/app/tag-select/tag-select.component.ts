import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {  PagesService } from '../pages/pages.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss'],
})
export class TagSelectComponent implements OnInit {
  tagsData = []
  pageNumber = 1;
  count = 100;
  searchInput;
  selectedItem = []
  @Input() mode: string
  @ViewChild('list', { static: false}) dxList: any;
  constructor(public modalController: ModalController, private pageService: PagesService) { }

  ngOnInit() {
    console.log(this.mode)
    this.pageService.GetTagsOnly(this.pageNumber, this.count, '').subscribe((dataFormApi: any) => {
        this.tagsData = JSON.parse(dataFormApi)
    })
  }

  dismissModal() {
    this.modalController.dismiss('',  'cancel')
  }
  

  // searchBarChanged() {
  //   console.log(this.searchInput)
  //   this.pageNumber = 1
  //   let search = this.searchInput
  //   if(search) {
  //     search = this.searchInput.toLocaleLowerCase().replace(' ', '').trim()
  //   }
  //   console.log(this.dxList.selectedItems, this.dxList)
  //   if(this.mode == 'single') {
  //     this.selectedItem = this.dxList.selectedItems
  //   } else {
  //     // Clear the selectedItem array before adding new items
  //     // this.selectedItem = [];
  //     this.selectedItem = this.selectedItem.concat(this.dxList.selectedItems)
  //   }
  //   this.pageService.GetTagsOnly(this.pageNumber, this.count, search).subscribe((dataFormApi: any) => {
  //       this.tagsData = []
  //       this.tagsData = JSON.parse(dataFormApi)
  //       if(JSON.parse(dataFormApi).length != 0) {
  //         this.tagsData = JSON.parse(dataFormApi)
  //       }
  //   })
  // }

  viewMore() {
    this.pageNumber += 1
    let search = this.searchInput
    if(search) {
      search = this.searchInput.toLocaleLowerCase().replace(' ', '').trim()
    } else {
      search = ''
    }
    this.pageService.GetTagsOnly(this.pageNumber, this.count, search).subscribe((dataFormApi: any) => {
      if(JSON.parse(dataFormApi).length != 0) {
       this.tagsData = this.tagsData.concat(JSON.parse(dataFormApi))
      }
    })
  }

  submitTags() {
    console.log(this.selectedItem)
    this.modalController.dismiss(this.selectedItem,  'submit')
  }

  onSelectionChanged(event) {
 
    if(event.addedItems.length != 0) {
      this.selectedItem.push(JSON.parse(JSON.stringify(event.addedItems[0])))
    }
    
    if(event.removedItems.length != 0) {
      this.selectedItem.splice(this.selectedItem.indexOf(event.removedItems[0]), 1)
    }
    console.log(event, this.selectedItem)
  }


}
