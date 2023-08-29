import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardPage } from './dasboard.page';
import { ViewpageComponent } from '../viewpage/viewpage.component';
import { ReportComponent } from '../report/report.component';
import { ViewgraphicsComponent } from '../viewgraphics/viewgraphics.component';
import { MenuComponent } from '../menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: DasboardPage,
    children: [
      {
        path: 'pages',
        //component: MainPageComponent
        loadChildren: () => import('../pages/pages.module').then( m => m.PagesPageModule)
      },
      {
        path: 'viewpages',
        component: ViewpageComponent
      },
      {
        path: 'viewgraphics',
        component: ViewgraphicsComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'query',
        loadChildren: () => import('../query/query.module').then( m => m.QueryPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/dashboard'
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'dashboard',
        component: MainPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardPageRoutingModule {}
