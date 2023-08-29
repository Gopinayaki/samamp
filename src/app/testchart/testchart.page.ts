import {
NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxChartComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { AggregationInterval, ArchitectureInfo, DataSource, TestService } from './test.service';

@Component({
selector: 'app-testchart',
templateUrl: './testchart.page.html',
styleUrls: ['./testchart.page.scss'],
providers: [TestService],
})
export class TestchartPage {
@ViewChild(DxChartComponent, { static: false }) component: DxChartComponent;

architecturesInfo: ArchitectureInfo[];
dataSource: DataSource[];
// intervals: AggregationInterval[];

intervals = [
  { displayName: 'Week', interval: 'week' },
  { displayName: 'Day', interval: 'day' },
  { displayName: 'Month', interval: 'month' },
  { displayName: 'Year', interval: 'year' }
];
aggregationInterval: string;
showHistInputs = false;
fromDate: string;
fromTime: string;
toDate: string;
toTime: string;

// argumentAxisSettings = {
//   aggregationInterval: 'week' // Default interval
// };

setInterval(interval: string) {
 this.aggregationInterval = interval;
}

constructor(service: TestService) {
  this.architecturesInfo = service.getArchitecturesInfo();
  this.dataSource = service.getDataSource();

  // this.intervals = service.getAggregationIntervals();
  console.log(this.architecturesInfo);
}


historicalFn(){
  this.showHistInputs = true;
}

realTimeFn() {
  this.showHistInputs = false;
}

showHistChart(){
  this.architecturesInfo.filter(val=>
    val.date = this.fromDate);
    
  console.log(this.fromDate,this.fromTime,this.toDate,this.toTime,this.architecturesInfo)
}

}