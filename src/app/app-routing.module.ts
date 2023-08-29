import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddpageComponent } from './addpage/addpage.component';
import { ControlformComponent } from './controlform/controlform.component'
import { AuthGuardService as AuthGuard  } from './auth/auth-guard.service';
import { LoginGuardService as LoginGuard  } from './auth/login-guard.service';
import { ChangePswdComponent } from './change-pswd/change-pswd.component';
import { Settings1Component } from './settings1/settings1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'tabs',
    //component: ControlformComponent
    loadChildren: () => import('./dasboard/dasboard.module').then( m => m.DasboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'query',
    loadChildren: () => import('./query/query.module').then( m => m.QueryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule),
  },
  
  {
    path: 'testchart',
    loadChildren: () => import('./testchart/testchart.module').then( m => m.TestchartPageModule)
  },
  {
    path: 'chgpswd',
    component: ChangePswdComponent
  },
  {
    path: 'settings1',
    component: Settings1Component
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
