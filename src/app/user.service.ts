import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendurl = 'http://localhost:6789/api';

  constructor(public http: HttpClient) {}

  login(data) {
    return this.http.post(`${this.backendurl}/user/login`, data);
  }

  addrole(data) {
    return this.http.post(`${this.backendurl}/admin/addrole`, data);
  }

  viewonerole(id) {
    return this.http.get(`${this.backendurl}/admin/viewonerole/${id}`);
  }

  getallroles() {
    return this.http.get(`${this.backendurl}/admin/allrole`);
  }

  //Inquiries
  getinquires() {
    return this.http.get(`${this.backendurl}/user/allinquiry`);
  }

  //add staff
  addstaff(data) {
    return this.http.post(`${this.backendurl}/admin/addstaff`, data);
  }

  getallstaff() {
    return this.http.get(`${this.backendurl}/admin/allstaff`);
  }

  //ips
  addip(data) {
    return this.http.post(`${this.backendurl}/admin/addprovidedip`, data);
  }

  viewoneip(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneprovidedip/${id}`);
  }

  getallips() {
    return this.http.get(`${this.backendurl}/admin/allprovidedip`);
  }

  //ips
  adddstnumber(data) {
    return this.http.post(`${this.backendurl}/admin/adddstnumber`, data);
  }

  viewonedstnumber(id) {
    return this.http.get(`${this.backendurl}/admin/viewonedstnumber/${id}`);
  }

  editdstnumber(id,data){
    return this.http.post(`${this.backendurl}/admin/editdstnumber/${id}`,data);
  }

  getalldstnumbers() {
    return this.http.get(`${this.backendurl}/admin/alldstnumber`);
  }


}
