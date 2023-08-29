import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestchartPage } from './testchart.page';

const routes: Routes = [
  {
    path: '',
    component: TestchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestchartPageRoutingModule {}
