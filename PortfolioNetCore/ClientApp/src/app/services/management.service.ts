import { Injectable, Inject } from '@angular/core';
import { Management } from '../models/management';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';//import { Http } from '@angular/http';


@Injectable()
export class ManagementService {

  private readonly endpoint = '/api/Management';



  constructor(private http: HttpClient) { }
  
  getManagementList(): Observable<Management[]> {
    return this.http.get<Management[]>(this.endpoint + '/GetManagementList');
  }

  deleteManagement(managementName: string): Observable<Management[]> {
    return this.http.post<Management[]>(this.endpoint + '/DeleteManagement/' + managementName, managementName);
  }
}
