import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestchartPageRoutingModule } from './testchart-routing.module';

import { TestchartPage } from './testchart.page';
import { DxChartModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestchartPageRoutingModule,
    DxChartModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxDateBoxModule
  ],
  declarations: [TestchartPage]
})
export class TestchartPageModule {}
