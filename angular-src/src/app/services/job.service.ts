import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { ApiResponse } from '../shared/interfaces/response';
import { CommonUtilsService } from './common-utils.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  public getAllJobsForUser(id:string): Observable<Object> {
    return this.httpClient.get<Object>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/jobsByUser/${id}`);
  }

  public postOpenJob(job: any): Promise<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/openJob`, job).toPromise();
  }

}
