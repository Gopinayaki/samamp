import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordService } from '../password.service';

// ...


@Component({
  selector: 'app-change-pswd',
  templateUrl: './change-pswd.component.html',
  styleUrls: ['./change-pswd.component.scss'],
})
export class ChangePswdComponent  implements OnInit {

  mode: any;
  enterPasswordFlag = true;
  verifyOtpFlag = true;
  currentPassword: any;
  otpModel: any;
  resendEnable = true;
  sendEnable = false;
  submitFlag = false;
  timerInterval: any;
  userId = localStorage.getItem('UserId');
  passwordModel: any;
  timer = 0;
  confirmPasswordModel: any;

  @ViewChild('currentPasswordInput' , {static: true}) currentPasswordInput: any
  constructor(private toastController: ToastController, private passwordService: PasswordService
  , private alertController: AlertController, private router: Router,private navcontroller : NavController) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.passwordService.GetMode().subscribe((res: any) => {
      console.log('response', res);
      this.mode = res
    }, (err) => {
      this.presentToast(err.message)
    })
    // this.profileService.SendOtpByUserId('7', 'admin@123').subscribe((res: any) => {
    //   console.log('response SendOtpByUserId', res);
    // })
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Password changed successfully',
      backdropDismiss: false,
      buttons: [
      {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            localStorage.removeItem('token')
            localStorage.removeItem('GroupId')
            localStorage.removeItem('UserId')
            localStorage.removeItem('query')
            localStorage.removeItem('imei')
            if(localStorage.getItem('remberMe') == 'false') {
              localStorage.removeItem('password')
              localStorage.removeItem('remberMe')
              localStorage.removeItem('userName')
            }
            this.router.navigateByUrl('login')
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  sendOtp() {
    this.passwordService.SendOtpByUserId(this.userId, this.currentPassword).subscribe((res: any) => {
      console.log('response SendOtpByUserId', res);
      this.presentToast('Otp Sent Successfully')
      this.verifyOtpFlag = false;
      this.sendEnable = true;
      this.startTimeTimer();
      // this.currentPassword = ''
    }, (err) => {
      this.presentToast('Current password is wrong')
    })
  }

  submit() {
    this.passwordService.SendOtpByUserId(this.userId, this.currentPassword).subscribe((res: any) => {
      console.log('response SendOtpByUserId', res);
      this.presentToast('Your password is match')
      this.enterPasswordFlag = false;
      this.submitFlag = true;
    }, (err) => {
      this.presentToast('Current password is wrong')
    })
  }

  reSendOtp() {
    this.passwordService.SendOtpByUserId(this.userId, this.currentPassword).subscribe((res: any) => {
      console.log('response SendOtpByUserId', res);
      this.presentToast('Otp Sent Successfully')
      this.resendEnable = true;
      this.verifyOtpFlag = false;
      this.timer = 0;
      this.startTimeTimer();
      // this.currentPassword = ''
    }, (err) => {
      this.presentToast('Current password is wrong')
    })
  }

  verifyOtp() {
    this.passwordService.verifyOtp(this.userId, this.otpModel).subscribe((resFromVerifyOtp: any) => {
      console.log('resFromVerifyOtp', resFromVerifyOtp)
      this.presentToast('Otp Verified Successfully')
      this.enterPasswordFlag = false;
      this.resendEnable = true;
      this.verifyOtpFlag = true;
      this.otpModel = ''
      if(this.timerInterval) { 
        clearInterval(this.timerInterval);
      }
      this.timer = 0;
    }, (err) => {
      this.presentToast('Invalid Otp')
    })
  }

  changePassword() {
    console.log(this.currentPasswordInput)
    this.passwordService.changePassword(this.userId, this.passwordModel).subscribe((resFromChangePassword) => {
      console.log('resFromChangePassword', resFromChangePassword)
      // this.presentToast('Password Changed Successfully')
      this.presentAlert()
    }, (err) => {
      this.presentToast('Password Cannot be changed')
    })
    // this.presentAlert()

    // Navigate to DashboardPageComponent
    this.navcontroller.navigateForward('tabs');
  }

  startTimeTimer() {
    this.timerInterval = setInterval(() => {
      if(this.timer < 30) {
        this.timer = this.timer + 1
        if(this.timer == 30) {
          this.resendEnable = false
        }
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000)
  }

}
