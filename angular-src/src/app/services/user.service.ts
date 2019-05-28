import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers() : Observable<Object> {
    return this.httpClient.get<Object>(`${this.apiUrl}/users`);
  }

  public getUserById(_userId : string) : Observable<Object> {
    return this.httpClient.get<Object>(`${this.apiUrl}/users/${_userId}`);
  }

  public updateUser(user: User) : Observable<Object>  {
    return this.httpClient.put<Object>(`${this.apiUrl}/users`, user);
  }

  public registerUser(register: any) {
    return this.httpClient.post(`${this.apiUrl}/register`, register);
  }

  public loginUser(login: any) {
    return this.httpClient.post(`${this.apiUrl}/login`, login);
  }
}
