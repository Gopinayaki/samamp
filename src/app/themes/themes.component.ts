import { Component, OnInit } from '@angular/core';
import { ThemeService } from './themes.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
})
export class ThemesComponent implements OnInit {

  public themeColor = [
    { name: 'Default', class: 'default' },
    { name: 'Dark', class: 'dark-theme' },
    { name: 'Purple', class: 'purple' },
    { name: 'Green', class: 'green' }
  ];
  public selectTheme;
  constructor(
    private theme: ThemeService,
    public modalController: ModalController,
    private router: Router
    ) {
    this.selectTheme = 'dark-theme';
    this.dynamicTheme()
  }

  dynamicTheme() {
    this.theme.activeTheme(this.selectTheme);
  }

  ngOnInit() {}

  changeTheme(){
    document.body.classList.toggle('dark');
  }

  currentModal = null;

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => {
        this.currentModal = null;
      });
    }
  }

  navigateUrl() {
    this.router.navigate(['chgpswd']);
    this.dismissModal();
  }

  navToSettings() {
    this.router.navigate(['settings1']);
    this.dismissModal();
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
    this.router.navigateByUrl('login');

    this.dismissModal();
  }

}
