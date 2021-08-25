import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendurl = 'http://localhost:5555/api';

  constructor(public http: HttpClient) {}

  login(data) {
    return this.http.post(`${this.backendurl}/user/login`, data);
  }
}
