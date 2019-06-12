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

  public getAllJobsForUser(id:string): Promise<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/jobsByUser/${id}`).toPromise();
  }

  public postOpenJob(job: any): Promise<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/openJob`, job).toPromise();
  }

  public postScheduleJob(job: any): Promise<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/scheduleJob`, job).toPromise();
  }

  public getJobsForUser(id:string): Promise<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/jobsForUser/${id}`).toPromise();
  }

}
