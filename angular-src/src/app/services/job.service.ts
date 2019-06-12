import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../shared/interfaces/response';
import { CommonUtilsService } from './common-utils.service';
import { JobStatus } from '../shared/models/enums';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  public getAllJobsByUser(id:string): Promise<ApiResponse> {
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

  public updateJobStatus(id:string, _jobStatus: number): Promise<ApiResponse> {
    return this.httpClient.put<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/jobs/${id}`, {jobStatus: _jobStatus}).toPromise();
  }
}
