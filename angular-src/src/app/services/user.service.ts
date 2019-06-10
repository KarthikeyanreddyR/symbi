import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { ApiResponse } from '../shared/interfaces/response';
import { CommonUtilsService } from './common-utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<Object> {
    return this.httpClient.get<Object>(`${CommonUtilsService.getAbsoluteUrl()}/users`);
  }

  public getUserById(_userId: string): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/users/${_userId}`);
  }

  public updateUser(user: User): Observable<Object>  {
    return this.httpClient.put<Object>(`${CommonUtilsService.getAbsoluteUrl()}/users`, user);
  }

  public registerUser(register: any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/register`, register);
  }

  public async logoutUser(): Promise<ApiResponse> {
    console.log('userservice - logoutUser');
    return await this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/logout`).toPromise();
  }

  public loginUser(login: any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/login`, login);
  }

  public GetAllReviewsByUser(_userId: string): Observable<ApiResponse> {
   return this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/reviewsByUser/${_userId}`);
  }

  public GetAllCaregiversWithReviewData() : Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/caregivers`);
  }

  public async GetSignedInUser() : Promise<ApiResponse> {
    return await this.httpClient.get<ApiResponse>(`${CommonUtilsService.getAbsoluteUrl()}/user/currentUser`).toPromise();
  }
}
