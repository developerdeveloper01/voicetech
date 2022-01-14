import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendurllocal = 'http://localhost:6789/api';
  backendurl = 'http://103.8.43.13/api/api';

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

  //staff
  addstaff(data) {
    return this.http.post(`${this.backendurl}/admin/addstaff`, data);
  }

  editstaff(id, data) {
    return this.http.post(`${this.backendurl}/admin/editstaff/${id}`, data);
  }

  getallstaff() {
    return this.http.get(`${this.backendurl}/admin/allstaff`);
  }

  deletestaff(id) {
    return this.http.get(`${this.backendurl}/admin/deletestaff/${id}`);
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

  //
  allcdrreport() {
    return this.http.get(`${this.backendurl}/admin/allcdrreport`);
  }

  getreport(id) {
    return this.http.get(`${this.backendurl}/admin/getdetailofonenumber/${id}`);
  }

  //Users
  allusers() {
    return this.http.get(`${this.backendurl}/user/allusers`);
  }

  usersignup(data) {
    return this.http.post(`${this.backendurl}/user/signup`, data);
  }

  edituser(id, data) {
    return this.http.post(`${this.backendurl}/admin/edituser/${id}`, data);
  }

  deleteuser(id) {
    return this.http.get(`${this.backendurl}/admin/deleteuser/${id}`);
  }

  userdetail(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneuser/${id}`);
  }

  //live-calls
  getallivecalls() {
    return this.http.get(`http://103.8.43.14/onyx/api/callStatus`);
  }

  getrecordings() {
    return this.http.get(`http://103.8.43.14/onyx/api/recordingsList?date=2021-12-08`);
  }

  stafflogin(data) {
    return this.http.post(`${this.backendurl}/admin/stafflogin`, data);
  }

  searchreportbynumber(data) {
    return this.http.post(`${this.backendurl}/admin/regexsearch`, data);
  }

  getrolespermisson() {
    const id_ = '612f25e59d95d23b34c2de8e';
    return this.http.get(`${this.backendurl}/admin/viewonestaff/${id_}`);
  }

  viewstaffbytoken() {
    let header = new HttpHeaders({
      'ad-token': localStorage.getItem('ad-token'),
    });
    return this.http.get(`${this.backendurl}/admin/viewonestaff`, {
      headers: header,
    });
  }

  viewadminstaff() {
    let header = new HttpHeaders({
      'ad-token': localStorage.getItem('ad-token'),
    });
    return this.http.get(`${this.backendurl}/admin/viewmystaff`, {
      headers: header,
    });
  }

  getroleslowerthanme() {
    let header = new HttpHeaders({
      'ad-token': localStorage.getItem('ad-token'),
    });
    return this.http.get(`${this.backendurl}/admin/lowerrolesthanmine`, {
      headers: header,
    });
  }

  getsinglerecording(date, caller_id_number, destination_number, uuid) {
    return this.http.get(
      `http://103.8.43.14/onyx/assets/recordings?date=${date}&file_name=${date}/${caller_id_number}_${destination_number}_${uuid}.wav`
    );
  }

  mydstnumbers() {
    let header = new HttpHeaders({
      'ad-token': localStorage.getItem('ad-token'),
    });
    return this.http.get(`${this.backendurl}/admin/mydstnumbers`, {
      headers: header,
    });
  }

  ///Dashboard///
  getallcallcounts() {
    return this.http.get(`${this.backendurl}/admin/allcdrcount`);
  }

  deleterole(id) {
    return this.http.get(`${this.backendurl}/admin/deleterole/${id}`);
  }

  addsubstaff(data) {
    let header = new HttpHeaders({
      'ad-token': localStorage.getItem('ad-token'),
    });
    return this.http.post(`${this.backendurl}/admin/addsubstaff`, data, {
      headers: header,
    });
  }

  addagent(data) {
    return this.http.post(`${this.backendurl}/admin/addagent`, data);
  }

  //support chat
  getchatwithuser(id) {
    return this.http.get(`${this.backendurl}/admin/allchatwithuser/${id}`);
  }

  getchatrooms() {
    return this.http.get(`${this.backendurl}/admin/getallchatrooms`);
  }

  sendchat(data) {
    return this.http.post(`${this.backendurl}/admin/addchat`, data);
  }

  markasread(id) {
    return this.http.get(`${this.backendurl}/admin/markasread/${id}`);
  }

  deleteonechat(id) {
    return this.http.get(`${this.backendurl}/admin/deletechat/${id}`);
  }

  deleteallchat(id) {
    return this.http.get(`${this.backendurl}/admin/deleteallchat/${id}`);
  }
}
