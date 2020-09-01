
import { Injectable, Inject } from '@angular/core';
import { Fund } from '../models/fund';
import { FundDetail } from '../models/funddetail';
import { Management } from '../models/management';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';//import { Http } from '@angular/http';


@Injectable()
export class PortfolioService {

  private readonly endpoint = '/api/SampleData';



  constructor(private http: HttpClient) { }


  getFundList(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.endpoint + '/GetFundList');
  }

  updateFundList(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.endpoint + '/ReFreshFundList');
  }

  getFundDetailList(): Observable<FundDetail[]> {
    return this.http.get<FundDetail[]>(this.endpoint + '/GetFundDetailList');
  }

  getManagementList(): Observable<Management[]> {
    return this.http.get<Management[]>(this.endpoint + '/GetManagementList');
  }

  DeleteFundDetail(isin: string): Observable<FundDetail[]> {

    console.log(isin);

    return this.http.post<FundDetail[]>(this.endpoint + '/DeleteFundDetail/' + isin , isin);
  }

  DeleteManagement(managementName: string): Observable<Management[]> {
    return this.http.post<Management[]>(this.endpoint + '/DeleteManagement/' + managementName, managementName);
  }
}



