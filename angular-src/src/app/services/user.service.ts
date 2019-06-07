import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { ApiResponse } from '../shared/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<Object> {
    return this.httpClient.get<Object>(`${this.apiUrl}/users`);
  }

  public getUserById(_userId: string): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/users/${_userId}`);
  }

  public updateUser(user: User): Observable<Object>  {
    return this.httpClient.put<Object>(`${this.apiUrl}/users`, user);
  }

  public registerUser(register: any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${this.apiUrl}/register`, register);
  }

  public loginUser(login: any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(`${this.apiUrl}/login`, login);
  }

  public GetAllReviewsByUser(_userId: string): Observable<ApiResponse> {
   return this.httpClient.get<ApiResponse>(`${this.apiUrl}/reviewsByUser/${_userId}`);
    //return this.httpClient.get<IReview[]>(`${this.apiURL}/users/${_userId}`);
  }

  public GetAllCaregiversWithReviewData() : Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/caregivers`);
  }
}
