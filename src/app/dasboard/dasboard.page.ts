import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages/pages.service'
import { ThemesComponent } from '../themes/themes.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage implements OnInit {

  header: string;
  pageData = []
  userName: any;
  imei: any;
  role: any;
  //superadmin = S
  //admin = A
  //power = P
  //simple = U
  licenseData: any;

  constructor(private router: Router, private aroute: ActivatedRoute, private menu: MenuController, public modalController: ModalController,private commonService: CommonService, private pageService: PagesService) { }

  ngAfterViewInit() {
    this.userName = localStorage.getItem('userName')
    this.imei = localStorage.getItem('imei')
    this.role = localStorage.getItem('AdminType')
    this.pageService.GetAppLicense().subscribe((licenseData: any) => {
      this.licenseData = JSON.parse(licenseData)
      // console.log('licenseData ------------>', licenseData,this.licenseData)
    })
  }

  navToSettings() {
    this.router.navigate(['./profile/settings'])
  }
  
  ngOnInit() {
    if(localStorage.getItem('data')) {
      this.pageData = JSON.parse(localStorage.getItem('data'))
    }
  }

  setHeader(value) {
    this.header = value;
    // this.router.navigateByUrl('dashboard/pages')
    // this.menu.close()
  }

  selectMenu(data) {
    this.header = data.pagename
    this.router.navigate(['tabs', data.pagename])
    this.menu.close()
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('GroupId')
    localStorage.removeItem('UserId')
    localStorage.removeItem('query')
    localStorage.removeItem('imei')
    localStorage.removeItem('userName')
    if(localStorage.getItem('remberMe') == 'false') {
      localStorage.removeItem('password')
      localStorage.removeItem('remberMe')
      localStorage.removeItem('userName')
    }
    this.router.navigateByUrl('login')
  }

  ionTabsDidChange(event) {
    console.log("event", event)
    this.header = event.tab
  }

  ionViewDidLeave() {
    console.log('ionic view did leave')
    this.menu.close()
  }

  navigateUrl() {
    this.router.navigate(['./profile/changepassword'])
  }

  private currentModal = null;

  async openMenuPage() {
    if (!this.currentModal) {
      const modal = await this.modalController.create({
        component: ThemesComponent,
        componentProps: {
          data: '',
        }
      });

      // Store the reference to the modal
      this.currentModal = modal;

      // Dismiss the modal when it is closed
      modal.onDidDismiss().then(() => {
        this.currentModal = null;
      });

      await modal.present();
    }
  }

  // Function to close the modal from outside
  closeMenuPage() {
    if (this.currentModal) {
      this.currentModal.dismiss();
    }
  }

  closeTheModalFromOutside() {
    // Assuming this function is in SomePageComponent or another component where you have access to the currentModal reference
    this.closeMenuPage();
  }
  


 }
