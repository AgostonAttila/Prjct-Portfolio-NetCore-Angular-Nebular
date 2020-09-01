import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

//import { SmartTableService } from '../../../@core/data/smart-table.service';

import { HttpClient } from '@angular/common/http';

import { FundService } from '../../../services/fund.service';

@Component({
  selector: 'ngx-smart-table2',
  templateUrl: './smart-table2.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTable2Component {

  actualYear = (new Date()).getFullYear()


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      isinNumber: { title: 'ISIN', type: 'string', },
      name: { title: 'Name', type: 'string', },
      currency: { title: 'Currency', type: 'string', },
      focus: { title: 'Focus', type: 'string', },
      management: { title: 'Management', type: 'string', },
      type: { title: 'Type', type: 'string', },

      performanceYTD: { title: 'YTD', type: 'string', },
      performance1Year: { title: '1 year', type: 'string', },
      performance3Year: { title: '3 year', type: 'string', },
      performance5Year: { title: '5 year', type: 'string', },
      performanceFromBeggining: { title: 'from Begg.', type: 'string', },
      performanceActualMinus9: { title: this.actualYear - 9, type: 'string', },
      performanceActualMinus8: { title: this.actualYear - 8, type: 'string', },
      performanceActualMinus7: { title: this.actualYear - 7, type: 'string', },
      performanceActualMinus6: { title: this.actualYear - 6, type: 'string', },
      performanceActualMinus5: { title: this.actualYear - 5, type: 'string', },
      performanceActualMinus4: { title: this.actualYear - 4, type: 'string', },
      performanceActualMinus3: { title: this.actualYear - 3, type: 'string', },
      performanceActualMinus2: { title: this.actualYear - 2, type: 'string', },
      performanceActualMinus1: { title: this.actualYear - 1, type: 'string', },
      performanceAverage: { title: 'Avg.', type: 'string', }

    },
  };

  source: LocalDataSource = new LocalDataSource();

  fundList: any;
  error: any;


  constructor(private service: FundService, private http: HttpClient) {

    service.getFundList().subscribe(
      res => {
        this.fundList = res,
          console.log('jo'),
          console.log(this.fundList),
          this.source.load(this.fundList);
      }, // success path
      error => { this.error = error, console.log('rossz'), console.log(this.error) } // error path
    );

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

