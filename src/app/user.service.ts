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

  editip(id, data) {
    return this.http.post(`${this.backendurl}/admin/editprovidedip/${id}`, data);
  }

  getallips() {
    return this.http.get(`${this.backendurl}/admin/allprovidedip`);
  }

  deleteip(id) {
    return this.http.get(`${this.backendurl}/admin/deleteprovidedip/${id}`);
  }


  //dst
  adddstnumber(data) {
    return this.http.post(`${this.backendurl}/admin/adddstnumber`, data);
  }

  viewonedstnumber(id) {
    return this.http.get(`${this.backendurl}/admin/viewonedstnumber/${id}`);
  }

  editdstnumber(id, data) {
    return this.http.post(`${this.backendurl}/admin/editdstnumber/${id}`, data);
  }

  deletenumber(id) {
    return this.http.get(`${this.backendurl}/admin/deletedstnumber/${id}`);
  }

  getalldstnumbers() {
    return this.http.get(`${this.backendurl}/admin/alldstnumber`);
  }


  //prepaid plan
  addplan(data) {
    return this.http.post(`${this.backendurl}/admin/addplan`, data);
  }
  viewoneplan(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneplan/${id}`);
  }
  editplan(id, data) {
    return this.http.post(`${this.backendurl}/admin/editplan/${id}`, data);
  }
  deleteplan(id) {
    return this.http.get(`${this.backendurl}/admin/deleteplan/${id}`);
  }
  getallplans() {
    return this.http.get(`${this.backendurl}/admin/allplan`);
  }

  //Cdr Report
  getdatewisereport() {
    return this.http.get(`${this.backendurl}/admin/viewreportsfromneronserver`);
  }
}
