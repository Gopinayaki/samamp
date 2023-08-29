import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchitectureInfo {
  date: string;

  temp: number;

  precip: number;
}

export class DataSource {
  Name: string;

  Value: number;

  TimeStamp: string;
}

export class AggregationInterval {
  displayName: string;

  interval: any;
}

export class AggregationFunction {
  displayName: string;

  func: string;
}

const intervals: AggregationInterval[] = [{
  displayName: 'One week',
  interval: 'week',
}, {
  displayName: 'Year',
  interval: 'year',
}, {
  displayName: 'Month',
  interval: 'month',
}];

const architecturesInfo: ArchitectureInfo[] = [
  {
    date: '2017-01-01',
    temp: 9.5,
    precip: 0.1,
  },
  {
    date: '2017-01-02',
    temp: 8,
    precip: 0.4,
  },
  {
    date: '2017-01-03',
    temp: 7.5,
    precip: 0.2,
  },
  {
    date: '2017-01-04',
    temp: 8.5,
    precip: 0.1,
  },
  {
    date: '2017-01-05',
    temp: 10,
    precip: 0.3,
  },
  {
    date: '2017-01-06',
    temp: 3,
    precip: 0,
  },
  {
    date: '2017-01-07',
    temp: 5,
    precip: 0.3,
  },
  {
    date: '2017-01-08',
    temp: 9.5,
    precip: 0,
  },
  {
    date: '2017-01-09',
    temp: 11,
    precip: 0.5,
  },
  {
    date: '2017-01-10',
    temp: 8,
    precip: 0,
  },
  {
    date: '2017-01-11',
    temp: 11.5,
    precip: 0.3,
  },
  {
    date: '2017-01-12',
    temp: 9.5,
    precip: 2.1,
  },
  {
    date: '2017-01-13',
    temp: 11.5,
    precip: 3.5,
  },
  {
    date: '2017-01-14',
    temp: 11,
    precip: 0.1,
  },
  {
    date: '2017-01-15',
    temp: 10.5,
    precip: 0,
  },
  {
    date: '2017-01-16',
    temp: 6.5,
    precip: 0,
  },
  {
    date: '2017-01-17',
    temp: 7.5,
    precip: 0,
  },
  {
    date: '2017-01-18',
    temp: 8,
    precip: 0.1,
  },
  {
    date: '2017-01-19',
    temp: 8.5,
    precip: 1.3,
  },
  {
    date: '2017-01-20',
    temp: 5.5,
    precip: 5.3,
  },
  {
    date: '2017-01-21',
    temp: 9,
    precip: 0.1,
  },
  {
    date: '2017-01-22',
    temp: 6,
    precip: 16.6,
  },
  {
    date: '2017-01-23',
    temp: 8.5,
    precip: 5.5,
  },
  {
    date: '2017-01-24',
    temp: 6.5,
    precip: 1.3,
  },
  {
    date: '2017-01-25',
    temp: 4.5,
    precip: 0,
  },
  {
    date: '2017-01-26',
    temp: 5.5,
    precip: 0,
  },
  {
    date: '2017-01-27',
    temp: 3,
    precip: 0,
  },
  {
    date: '2017-01-28',
    temp: 6.5,
    precip: 0,
  },
  {
    date: '2017-01-29',
    temp: 8,
    precip: 0,
  },
  {
    date: '2017-01-30',
    temp: 10.5,
    precip: 0,
  },
  {
    date: '2017-01-31',
    temp: 13,
    precip: 0,
  },
  {
    date: '2017-02-01',
    temp: 10.5,
    precip: 0,
  },
  {
    date: '2017-02-02',
    temp: 12,
    precip: 0,
  },
  {
    date: '2017-02-03',
    temp: 13,
    precip: 0.2,
  },
  {
    date: '2017-02-04',
    temp: 10,
    precip: 0,
  },
  {
    date: '2017-02-05',
    temp: 11.5,
    precip: 0,
  },
  {
    date: '2017-02-06',
    temp: 11.5,
    precip: 0.1,
  },
  {
    date: '2017-02-07',
    temp: 12.5,
    precip: 0.5,
  },
  {
    date: '2017-02-08',
    temp: 13,
    precip: 0,
  },
  {
    date: '2017-02-09',
    temp: 15.5,
    precip: 0,
  },
  {
    date: '2017-02-10',
    temp: 16.5,
    precip: 0.1,
  },
  {
    date: '2017-02-11',
    temp: 14.5,
    precip: 0.8,
  },
  {
    date: '2017-02-12',
    temp: 13.5,
    precip: 0.1,
  },
  {
    date: '2017-02-13',
    temp: 13.5,
    precip: 0,
  },
  {
    date: '2017-02-14',
    temp: 12,
    precip: 0,
  },
  {
    date: '2017-02-15',
    temp: 13.5,
    precip: 0,
  },
  {
    date: '2017-02-16',
    temp: 14.5,
    precip: 0,
  },
  {
    date: '2017-02-17',
    temp: 12.5,
    precip: 4.5,
  },
  {
    date: '2017-02-18',
    temp: 10,
    precip: 14.4,
  },
  {
    date: '2017-02-19',
    temp: 13.5,
    precip: 0.5,
  },
  {
    date: '2017-02-20',
    temp: 14,
    precip: 0.6,
  },
  {
    date: '2017-02-21',
    temp: 15,
    precip: 0,
  },
  {
    date: '2017-02-22',
    temp: 11,
    precip: 0,
  },
  {
    date: '2017-02-23',
    temp: 7.5,
    precip: 0,
  },
  {
    date: '2017-02-24',
    temp: 6,
    precip: 0,
  },
  {
    date: '2017-02-25',
    temp: 7,
    precip: 0,
  },
  {
    date: '2017-02-26',
    temp: 8,
    precip: 0,
  },
  {
    date: '2017-02-27',
    temp: 8.5,
    precip: 0.1,
  },
  {
    date: '2017-02-28',
    temp: 10,
    precip: 0,
  },
  {
    date: '2017-03-01',
    temp: 9,
    precip: 0,
  },
  {
    date: '2017-03-02',
    temp: 11,
    precip: 0,
  },
  {
    date: '2017-03-03',
    temp: 15,
    precip: 0,
  },
  {
    date: '2017-03-04',
    temp: 14.5,
    precip: 0,
  },
  {
    date: '2017-03-05',
    temp: 12.5,
    precip: 0,
  },
  {
    date: '2017-03-06',
    temp: 7.5,
    precip: 0,
  },
  {
    date: '2017-03-07',
    temp: 11,
    precip: 0,
  },
  {
    date: '2017-03-08',
    temp: 16,
    precip: 0,
  },
  {
    date: '2017-03-09',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-03-10',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-03-11',
    temp: 20.5,
    precip: 0,
  },
  {
    date: '2017-03-12',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-03-13',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-03-14',
    temp: 23.5,
    precip: 0,
  },
  {
    date: '2017-03-15',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-03-16',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-03-17',
    temp: 22.5,
    precip: 0,
  },
  {
    date: '2017-03-18',
    temp: 23.5,
    precip: 0,
  },
  {
    date: '2017-03-19',
    temp: 24,
    precip: 0,
  },
  {
    date: '2017-03-20',
    temp: 23.5,
    precip: 0,
  },
  {
    date: '2017-03-21',
    temp: 22,
    precip: 0,
  },
  {
    date: '2017-03-22',
    temp: 18.5,
    precip: 4,
  },
  {
    date: '2017-03-23',
    temp: 15,
    precip: 2.4,
  },
  {
    date: '2017-03-24',
    temp: 20.5,
    precip: 0,
  },
  {
    date: '2017-03-25',
    temp: 19,
    precip: 0,
  },
  {
    date: '2017-03-26',
    temp: 18.5,
    precip: 0,
  },
  {
    date: '2017-03-27',
    temp: 18,
    precip: 0,
  },
  {
    date: '2017-03-28',
    temp: 17,
    precip: 0,
  },
  {
    date: '2017-03-29',
    temp: 21,
    precip: 0,
  },
  {
    date: '2017-03-30',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-03-31',
    temp: 16.5,
    precip: 0.2,
  },
  {
    date: '2017-04-01',
    temp: 19,
    precip: 0,
  },
  {
    date: '2017-04-02',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-04-03',
    temp: 18,
    precip: 0,
  },
  {
    date: '2017-04-04',
    temp: 16.5,
    precip: 0,
  },
  {
    date: '2017-04-05',
    temp: 17,
    precip: 0,
  },
  {
    date: '2017-04-06',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-04-07',
    temp: 22,
    precip: 0,
  },
  {
    date: '2017-04-08',
    temp: 19,
    precip: 0.2,
  },
  {
    date: '2017-04-09',
    temp: 14.5,
    precip: 0,
  },
  {
    date: '2017-04-10',
    temp: 17,
    precip: 0,
  },
  {
    date: '2017-04-11',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-04-12',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-04-13',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-04-14',
    temp: 19,
    precip: 0,
  },
  {
    date: '2017-04-15',
    temp: 21,
    precip: 0,
  },
  {
    date: '2017-04-16',
    temp: 22.5,
    precip: 0,
  },
  {
    date: '2017-04-17',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-04-18',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-04-19',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-04-20',
    temp: 22,
    precip: 0,
  },
  {
    date: '2017-04-21',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-04-22',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-04-23',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-04-24',
    temp: 25,
    precip: 0,
  },
  {
    date: '2017-04-25',
    temp: 22,
    precip: 0,
  },
  {
    date: '2017-04-26',
    temp: 23.5,
    precip: 0,
  },
  {
    date: '2017-04-27',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-04-28',
    temp: 19,
    precip: 0,
  },
  {
    date: '2017-04-29',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-04-30',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-05-01',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-05-02',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-05-03',
    temp: 25.5,
    precip: 0,
  },
  {
    date: '2017-05-04',
    temp: 28,
    precip: 0,
  },
  {
    date: '2017-05-05',
    temp: 28.5,
    precip: 0,
  },
  {
    date: '2017-05-06',
    temp: 27,
    precip: 0.4,
  },
  {
    date: '2017-05-07',
    temp: 17,
    precip: 0.1,
  },
  {
    date: '2017-05-08',
    temp: 17,
    precip: 0,
  },
  {
    date: '2017-05-09',
    temp: 20,
    precip: 1.7,
  },
  {
    date: '2017-05-10',
    temp: 19.5,
    precip: 0.3,
  },
  {
    date: '2017-05-11',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-05-12',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-05-13',
    temp: 22.5,
    precip: 0,
  },
  {
    date: '2017-05-14',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-05-15',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-05-16',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-05-17',
    temp: 18.5,
    precip: 0,
  },
  {
    date: '2017-05-18',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-05-19',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-05-20',
    temp: 24,
    precip: 0,
  },
  {
    date: '2017-05-21',
    temp: 27.5,
    precip: 0,
  },
  {
    date: '2017-05-22',
    temp: 29,
    precip: 0,
  },
  {
    date: '2017-05-23',
    temp: 30.5,
    precip: 0,
  },
  {
    date: '2017-05-24',
    temp: 31,
    precip: 0,
  },
  {
    date: '2017-05-25',
    temp: 29.5,
    precip: 0,
  },
  {
    date: '2017-05-26',
    temp: 27,
    precip: 0,
  },
  {
    date: '2017-05-27',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-05-28',
    temp: 29,
    precip: 0,
  },
  {
    date: '2017-05-29',
    temp: 30.5,
    precip: 0,
  },
  {
    date: '2017-05-30',
    temp: 31.5,
    precip: 0,
  },
  {
    date: '2017-05-31',
    temp: 29.5,
    precip: 0,
  },
  {
    date: '2017-06-01',
    temp: 28,
    precip: 0,
  },
  {
    date: '2017-06-02',
    temp: 30,
    precip: 0,
  },
  {
    date: '2017-06-03',
    temp: 32.5,
    precip: 0,
  },
  {
    date: '2017-06-04',
    temp: 32,
    precip: 0,
  },
  {
    date: '2017-06-05',
    temp: 31.5,
    precip: 0,
  },
  {
    date: '2017-06-06',
    temp: 33,
    precip: 0,
  },
  {
    date: '2017-06-07',
    temp: 32.5,
    precip: 0,
  },
  {
    date: '2017-06-08',
    temp: 31.5,
    precip: 0,
  },
  {
    date: '2017-06-09',
    temp: 31.5,
    precip: 0,
  },
  {
    date: '2017-06-10',
    temp: 29,
    precip: 0,
  },
  {
    date: '2017-06-11',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-06-12',
    temp: 21,
    precip: 0,
  },
  {
    date: '2017-06-13',
    temp: 25,
    precip: 0,
  },
  {
    date: '2017-06-14',
    temp: 30.5,
    precip: 0,
  },
  {
    date: '2017-06-15',
    temp: 32,
    precip: 0,
  },
  {
    date: '2017-06-16',
    temp: 34.5,
    precip: 0,
  },
  {
    date: '2017-06-17',
    temp: 36,
    precip: 0,
  },
  {
    date: '2017-06-18',
    temp: 36,
    precip: 0,
  },
  {
    date: '2017-06-19',
    temp: 37.5,
    precip: 0,
  },
  {
    date: '2017-06-20',
    temp: 39,
    precip: 0,
  },
  {
    date: '2017-06-21',
    temp: 38,
    precip: 0,
  },
  {
    date: '2017-06-22',
    temp: 37.5,
    precip: 0,
  },
  {
    date: '2017-06-23',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-06-24',
    temp: 37.5,
    precip: 0,
  },
  {
    date: '2017-06-25',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-06-26',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-06-27',
    temp: 34,
    precip: 0,
  },
  {
    date: '2017-06-28',
    temp: 34,
    precip: 0,
  },
  {
    date: '2017-06-29',
    temp: 37.5,
    precip: 0,
  },
  {
    date: '2017-06-30',
    temp: 35,
    precip: 0,
  },
  {
    date: '2017-07-01',
    temp: 37.5,
    precip: 0,
  },
  {
    date: '2017-07-02',
    temp: 35.5,
    precip: 0,
  },
  {
    date: '2017-07-03',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-07-04',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-07-05',
    temp: 39,
    precip: 0,
  },
  {
    date: '2017-07-06',
    temp: 39.5,
    precip: 0,
  },
  {
    date: '2017-07-07',
    temp: 40,
    precip: 0,
  },
  {
    date: '2017-07-08',
    temp: 39,
    precip: 0,
  },
  {
    date: '2017-07-09',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-07-10',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-07-11',
    temp: 36.5,
    precip: 0.1,
  },
  {
    date: '2017-07-12',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-07-13',
    temp: 38,
    precip: 0,
  },
  {
    date: '2017-07-14',
    temp: 39.5,
    precip: 0,
  },
  {
    date: '2017-07-15',
    temp: 40,
    precip: 0,
  },
  {
    date: '2017-07-16',
    temp: 38.5,
    precip: 0,
  },
  {
    date: '2017-07-17',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-07-18',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-07-19',
    temp: 34,
    precip: 0.4,
  },
  {
    date: '2017-07-20',
    temp: 34.5,
    precip: 0,
  },
  {
    date: '2017-07-21',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-07-22',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-07-23',
    temp: 38,
    precip: 0,
  },
  {
    date: '2017-07-24',
    temp: 34,
    precip: 0.1,
  },
  {
    date: '2017-07-25',
    temp: 34,
    precip: 0,
  },
  {
    date: '2017-07-26',
    temp: 33.5,
    precip: 0.2,
  },
  {
    date: '2017-07-27',
    temp: 36,
    precip: 0,
  },
  {
    date: '2017-07-28',
    temp: 38,
    precip: 0,
  },
  {
    date: '2017-07-29',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-07-30',
    temp: 37.5,
    precip: 0.1,
  },
  {
    date: '2017-07-31',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-08-01',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-08-02',
    temp: 35.5,
    precip: 0.1,
  },
  {
    date: '2017-08-03',
    temp: 33.5,
    precip: 0.9,
  },
  {
    date: '2017-08-04',
    temp: 32,
    precip: 0.1,
  },
  {
    date: '2017-08-05',
    temp: 33.5,
    precip: 0.1,
  },
  {
    date: '2017-08-06',
    temp: 34,
    precip: 0,
  },
  {
    date: '2017-08-07',
    temp: 33.5,
    precip: 0,
  },
  {
    date: '2017-08-08',
    temp: 35.5,
    precip: 0,
  },
  {
    date: '2017-08-09',
    temp: 36,
    precip: 0,
  },
  {
    date: '2017-08-10',
    temp: 35.5,
    precip: 0,
  },
  {
    date: '2017-08-11',
    temp: 35,
    precip: 0,
  },
  {
    date: '2017-08-12',
    temp: 35.5,
    precip: 0.1,
  },
  {
    date: '2017-08-13',
    temp: 34,
    precip: 0,
  },
  {
    date: '2017-08-14',
    temp: 32.5,
    precip: 0,
  },
  {
    date: '2017-08-15',
    temp: 30,
    precip: 0,
  },
  {
    date: '2017-08-16',
    temp: 31,
    precip: 0,
  },
  {
    date: '2017-08-17',
    temp: 33.5,
    precip: 0,
  },
  {
    date: '2017-08-18',
    temp: 34.5,
    precip: 0,
  },
  {
    date: '2017-08-19',
    temp: 34,
    precip: 0,
  },
  {
    date: '2017-08-20',
    temp: 33,
    precip: 0,
  },
  {
    date: '2017-08-21',
    temp: 32,
    precip: 0,
  },
  {
    date: '2017-08-22',
    temp: 32.5,
    precip: 0,
  },
  {
    date: '2017-08-23',
    temp: 33,
    precip: 0,
  },
  {
    date: '2017-08-24',
    temp: 33,
    precip: 0,
  },
  {
    date: '2017-08-25',
    temp: 33.5,
    precip: 0,
  },
  {
    date: '2017-08-26',
    temp: 36,
    precip: 0,
  },
  {
    date: '2017-08-27',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-08-28',
    temp: 37,
    precip: 0,
  },
  {
    date: '2017-08-29',
    temp: 36.5,
    precip: 0,
  },
  {
    date: '2017-08-30',
    temp: 36,
    precip: 0.3,
  },
  {
    date: '2017-08-31',
    temp: 33.5,
    precip: 0.3,
  },
  {
    date: '2017-09-01',
    temp: 33.5,
    precip: 0,
  },
  {
    date: '2017-09-02',
    temp: 34.5,
    precip: 0,
  },
  {
    date: '2017-09-03',
    temp: 34,
    precip: 0.1,
  },
  {
    date: '2017-09-04',
    temp: 29.5,
    precip: 0,
  },
  {
    date: '2017-09-05',
    temp: 33,
    precip: 0,
  },
  {
    date: '2017-09-06',
    temp: 32,
    precip: 0,
  },
  {
    date: '2017-09-07',
    temp: 32,
    precip: 0,
  },
  {
    date: '2017-09-08',
    temp: 28,
    precip: 1.7,
  },
  {
    date: '2017-09-09',
    temp: 23,
    precip: 7.6,
  },
  {
    date: '2017-09-10',
    temp: 29,
    precip: 0,
  },
  {
    date: '2017-09-11',
    temp: 32,
    precip: 0,
  },
  {
    date: '2017-09-12',
    temp: 31,
    precip: 0,
  },
  {
    date: '2017-09-13',
    temp: 30.5,
    precip: 0,
  },
  {
    date: '2017-09-14',
    temp: 26,
    precip: 0,
  },
  {
    date: '2017-09-15',
    temp: 23.5,
    precip: 0,
  },
  {
    date: '2017-09-16',
    temp: 24.5,
    precip: 0,
  },
  {
    date: '2017-09-17',
    temp: 25,
    precip: 0,
  },
  {
    date: '2017-09-18',
    temp: 26.5,
    precip: 0,
  },
  {
    date: '2017-09-19',
    temp: 24.5,
    precip: 0,
  },
  {
    date: '2017-09-20',
    temp: 24.5,
    precip: 0,
  },
  {
    date: '2017-09-21',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-09-22',
    temp: 17,
    precip: 0,
  },
  {
    date: '2017-09-23',
    temp: 15.5,
    precip: 0,
  },
  {
    date: '2017-09-24',
    temp: 17.5,
    precip: 0,
  },
  {
    date: '2017-09-25',
    temp: 18,
    precip: 0,
  },
  {
    date: '2017-09-26',
    temp: 18.5,
    precip: 0,
  },
  {
    date: '2017-09-27',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-09-28',
    temp: 22,
    precip: 0,
  },
  {
    date: '2017-09-29',
    temp: 24,
    precip: 0,
  },
  {
    date: '2017-09-30',
    temp: 25,
    precip: 0,
  },
  {
    date: '2017-10-01',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-10-02',
    temp: 18,
    precip: 0,
  },
  {
    date: '2017-10-03',
    temp: 18.5,
    precip: 0,
  },
  {
    date: '2017-10-04',
    temp: 18.5,
    precip: 0,
  },
  {
    date: '2017-10-05',
    temp: 21.5,
    precip: 0,
  },
  {
    date: '2017-10-06',
    temp: 19.5,
    precip: 0,
  },
  {
    date: '2017-10-07',
    temp: 23,
    precip: 0,
  },
  {
    date: '2017-10-08',
    temp: 24,
    precip: 0,
  },
  {
    date: '2017-10-09',
    temp: 14.5,
    precip: 0,
  },
  {
    date: '2017-10-10',
    temp: 18,
    precip: 0,
  },
  {
    date: '2017-10-11',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-10-12',
    temp: 20,
    precip: 0,
  },
  {
    date: '2017-10-13',
    temp: 21,
    precip: 0,
  },
  {
    date: '2017-10-14',
    temp: 17,
    precip: 0,
  }
]
for (let i = 0; i < architecturesInfo.length; i++) {
  architecturesInfo[i].date = architecturesInfo[i].date + 'T00:00:00';
}

console.log(architecturesInfo);

const dataSource: DataSource[] = [
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T18:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T18:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T18:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T18:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T19:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T19:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T19:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T19:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T19:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T19:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T19:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T19:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T19:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T19:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T19:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T19:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T19:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T19:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T19:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T19:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T19:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T19:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T19:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T19:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T19:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T19:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T19:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T19:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T19:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T19:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T19:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T19:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T19:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T19:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T19:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T19:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T19:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T19:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T19:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T19:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T19:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T19:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T19:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T19:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T19:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T19:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T19:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T19:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T19:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T19:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T19:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T19:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T19:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T19:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T19:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T19:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T20:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T20:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T20:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T20:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T20:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T20:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T20:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T20:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T20:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T20:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T20:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T20:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T20:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T20:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T20:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T20:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T20:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T20:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T20:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T20:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T20:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T20:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T20:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T20:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T20:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T20:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T20:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T20:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T20:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T20:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T20:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T20:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T20:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T20:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T20:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T20:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T20:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T20:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T20:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T20:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T20:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T20:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T20:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T20:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T20:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T21:00:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T21:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T21:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T21:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T21:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T21:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T21:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T21:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T21:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T21:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T21:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T21:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T21:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T21:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T21:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T21:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T21:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T21:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T21:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T21:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T21:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T21:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T21:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T21:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T21:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T21:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T21:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T21:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T21:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T21:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T21:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T21:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T21:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T21:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T21:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T21:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T21:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T21:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T21:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T21:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T21:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T21:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T21:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T21:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T21:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T21:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T21:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T21:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T21:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T21:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T21:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T21:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T21:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T21:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T21:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T21:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T21:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T21:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T21:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T21:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T22:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T22:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T22:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T22:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T22:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T22:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T22:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T22:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T22:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T22:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T22:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T22:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T22:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T22:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T22:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T22:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T22:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T22:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T22:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T22:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T22:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T22:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T22:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T22:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T22:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T22:25:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T22:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T22:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T22:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T22:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T22:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T22:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T22:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T22:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T22:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T22:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T22:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T22:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T22:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T22:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T22:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T22:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T22:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T22:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T22:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T22:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T22:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T22:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T22:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T22:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T22:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T22:51:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T22:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T22:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T22:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T22:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T22:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T22:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T22:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T22:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-12T23:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T23:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T23:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T23:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T23:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T23:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-12T23:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T23:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T23:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T23:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T23:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T23:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T23:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T23:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T23:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T23:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-12T23:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T23:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-12T23:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T23:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T23:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T23:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T23:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-12T23:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T23:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T23:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-12T23:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-12T23:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T23:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T23:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-12T23:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-12T23:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T23:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T23:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-12T23:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T23:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T23:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-12T23:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T23:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T23:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T23:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-12T23:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T23:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-12T23:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-12T23:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-12T23:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-12T23:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T23:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T23:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T23:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-12T23:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-12T23:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-12T23:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-12T23:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T00:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T00:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T00:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T00:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T00:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T00:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T00:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T00:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T00:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T00:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T00:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T00:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T00:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T00:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T00:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T00:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T00:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T00:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T00:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T00:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T00:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T00:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T00:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T00:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T00:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T00:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T00:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T00:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T00:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T00:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T00:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T00:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T00:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T00:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T00:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T00:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T00:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T00:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T00:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T00:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T00:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T00:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T00:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T00:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T00:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T00:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T00:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T00:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T00:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T00:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T00:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T00:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T00:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T00:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T00:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T00:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T00:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T00:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T00:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T01:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T01:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T01:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T01:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T01:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T01:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T01:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T01:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T01:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T01:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T01:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T01:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T01:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T01:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T01:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T01:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T01:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T01:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T01:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T01:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T01:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T01:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T01:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T01:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T01:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T01:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T01:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T01:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T01:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T01:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T01:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T01:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T01:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T01:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T01:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T01:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T01:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T01:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T01:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T01:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T01:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T01:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T01:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T01:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T01:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T01:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T02:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T02:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T02:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T02:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T02:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T02:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T02:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T02:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T02:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T02:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T02:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T02:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T02:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T02:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T02:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T02:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T02:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T02:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T02:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T02:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T02:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T02:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T02:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T02:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T02:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T02:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T02:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T02:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T02:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T02:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T02:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T02:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T02:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T02:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T02:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T02:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T02:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T02:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T02:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T02:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T02:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T02:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T02:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T02:50:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T02:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T02:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T02:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T02:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T02:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T02:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T02:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T02:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T02:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T03:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T03:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T03:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T03:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T03:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T03:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:10:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T03:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T03:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T03:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T03:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T03:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T03:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T03:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T03:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T03:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T03:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T03:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T03:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T03:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T03:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T03:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T03:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T03:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T03:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T03:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T03:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T03:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T03:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T03:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T03:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T03:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T03:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T03:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T03:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T03:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T03:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T03:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T09:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T09:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T09:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T09:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T09:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T09:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T09:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T09:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T09:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T09:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T09:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T09:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T09:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T09:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T09:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T09:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T09:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T09:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T09:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T09:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T09:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T09:36:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T09:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T09:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T09:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T09:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T09:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T09:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T09:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T09:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T09:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T09:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T09:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T09:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T09:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T09:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T09:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T09:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T09:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T09:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T09:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T09:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T09:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T09:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T10:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T10:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T10:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T10:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T10:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T10:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T10:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T10:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T10:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T10:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T10:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T10:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T10:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T10:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T10:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T10:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T10:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T10:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T10:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T10:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T10:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T10:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T10:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T10:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T10:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T10:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T10:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T10:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T10:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T10:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T10:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T10:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T10:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T10:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T10:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T10:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T10:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T10:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T10:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T10:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T10:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T10:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T10:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T10:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T10:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T10:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T10:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T10:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T10:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T10:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T10:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T10:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T10:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T10:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T10:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T10:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T10:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T10:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T10:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T10:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T11:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T11:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T11:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T11:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T11:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T11:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T11:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T11:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T11:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T11:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T11:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T11:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T11:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T11:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T11:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T11:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T11:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T11:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T11:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T11:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T11:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T11:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T11:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T11:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T11:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T11:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T11:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T11:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T11:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T11:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T11:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T11:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T11:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T11:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T11:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T11:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T11:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T11:42:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T11:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T11:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T11:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T11:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T11:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T11:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T11:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T11:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T11:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T11:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T11:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T11:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T11:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T11:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T11:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T11:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T12:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T12:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T12:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T12:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T12:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T12:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T12:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T12:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T12:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T12:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T12:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T12:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T12:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T12:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T12:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T12:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T12:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T12:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T12:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T12:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T12:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T12:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T12:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T12:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T12:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T12:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T12:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:28:01"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T12:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T12:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T12:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T12:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T12:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T12:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T12:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T12:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T12:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T12:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T12:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T12:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T12:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T12:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T12:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T12:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T12:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T12:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T12:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T12:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T12:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T12:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T12:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T12:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T12:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T13:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T13:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T13:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T13:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T13:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T13:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 6,
  TimeStamp: "2023-06-13T13:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T13:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T13:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T13:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T13:11:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T13:12:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T13:13:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:14:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T13:15:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T13:16:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -6,
  TimeStamp: "2023-06-13T13:17:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T13:18:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T13:19:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T13:20:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T13:21:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T13:22:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T13:23:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T13:24:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:25:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T13:26:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T13:27:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T13:28:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T13:29:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:30:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T13:31:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T13:32:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T13:33:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T13:34:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T13:35:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:36:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T13:37:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:38:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T13:39:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 1,
  TimeStamp: "2023-06-13T13:40:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T13:41:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -3,
  TimeStamp: "2023-06-13T13:42:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T13:43:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T13:44:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T13:45:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T13:46:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T13:47:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T13:48:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -9,
  TimeStamp: "2023-06-13T13:49:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T13:50:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T13:51:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T13:52:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 3,
  TimeStamp: "2023-06-13T13:53:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -7,
  TimeStamp: "2023-06-13T13:54:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -1,
  TimeStamp: "2023-06-13T13:55:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 4,
  TimeStamp: "2023-06-13T13:56:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T13:57:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 0,
  TimeStamp: "2023-06-13T13:58:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T13:59:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T14:00:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T14:01:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -8,
  TimeStamp: "2023-06-13T14:02:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 9,
  TimeStamp: "2023-06-13T14:03:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -10,
  TimeStamp: "2023-06-13T14:04:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -4,
  TimeStamp: "2023-06-13T14:05:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 2,
  TimeStamp: "2023-06-13T14:06:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -2,
  TimeStamp: "2023-06-13T14:07:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 5,
  TimeStamp: "2023-06-13T14:08:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 8,
  TimeStamp: "2023-06-13T14:09:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: -5,
  TimeStamp: "2023-06-13T14:10:00"
  },
  {
  Name: "10FIC08/PV.CV",
  Value: 7,
  TimeStamp: "2023-06-13T14:11:00"
  },
  ]
  
@Injectable()
export class TestService {
  getArchitecturesInfo(): ArchitectureInfo[] {
    return architecturesInfo;
  }
  getAggregationIntervals(): AggregationInterval[] {
    return intervals;
  }
  getDataSource(): DataSource[] {
    return dataSource;
  }
}