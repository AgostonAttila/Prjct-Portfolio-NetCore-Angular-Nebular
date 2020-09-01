import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { FundService } from '../../services/fund.service';
import { Fund } from '../../models/fund';

export class TrafficBar {
  data: number[];
  labels: string[];
  formatter: string;
}

@Injectable()
export class TrafficBarService {

  private data = {};

  private isinNumber: string;
  private fund: Fund;

  error: any;

  constructor(private period: PeriodsService, private fundService: FundService) {

    this.isinNumber = 'LU0029873410';

    this.data = {
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
      week: this.getDataForYearPeriod(),
    };

    fundService.getFund(this.isinNumber).subscribe(
      res => {
        this.fund = res
          //,this.data = {
          //  month: this.getDataForMonthPeriod(),
          //  year: this.getDataForYearPeriod(),
          //};
      },
      error => { this.error = error; }
    );

  }


  getDataForMonthPeriod(): TrafficBar {
    return {
      data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
      // data: this.fund.MonthlyPerformanceList[this.fund.MonthlyPerformanceList.length - 1].PerformanceListByMonth.map(Number),
      labels: this.period.getMonths(),
      formatter: '{c0}',// + this.fund.Currency,
    };
  }

  getDataForYearPeriod(): TrafficBar {

    return {
      data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
      // data: this.fund.MonthlyPerformanceList[this.fund.MonthlyPerformanceList.length - 1].PerformanceListByMonth.map(Number),
      labels: this.period.getMonths(),
      formatter: '{c0}',// + this.fund.Currency,
    };

    //return {
    //  data: this.fund.MonthlyPerformanceList.forEach(element => +element.Performance),
    //  labels: this.fund.MonthlyPerformanceList.forEach(element => element.Year),
    //  formatter: '{c0}' + this.fund.Currency,
    //};
  }

  getTrafficBarData(period: string): Observable<TrafficBar> {
    return observableOf(this.data[period]);
  }
}
