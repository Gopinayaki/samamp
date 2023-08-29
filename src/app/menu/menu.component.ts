import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagesService } from '../pages/pages.service';
import { Router } from '@angular/router';
import { ThemesComponent } from '../themes/themes.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  licenseData: any;
  currentModal = null;

  constructor(
    private router: Router,
    public modalController: ModalController,
    private pageService: PagesService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.pageService.GetAppLicense().subscribe((licenseData: any) => {
      this.licenseData = JSON.parse(licenseData)
      // console.log('licenseData ------------>', licenseData,this.licenseData)
    })
  }

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

  navToPage(page) {
    this.router.navigate([page]);
  }

  changeTheme(){
    document.body.classList.toggle('dark');
  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => {
        this.currentModal = null;
      });
    }
  }
}
