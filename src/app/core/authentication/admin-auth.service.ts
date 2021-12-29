import { RefreshToken } from '@core/authentication/interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '@shared';
import { BehaviorSubject } from 'rxjs';
import { User } from './interface';
import { TokenService } from './token.service';
import { guest } from './user';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private usertype$ = new BehaviorSubject<User>(guest);
  backendurl = 'http://localhost:6789/api';
  token: string;
  constructor(
    private http: HttpClient,
    private store: LocalStorageService,
    private permissonsSrv: NgxPermissionsService,
    private rolesSrv: NgxRolesService
  ) {}

  set(token: any) {
    // console.log(token)
    this.token = token;
    this.store.set('TOKEN', token);
    return this;
  }

  tokenExpired() {
    console.log('checking token');
    this.store.get('TOKEN');
    const permissions = ['canAdd'];
    // console.log(this.permissonsSrv.loadPermissions(permissions));

    this.rolesSrv.addRoles({ ADMIN: permissions });
    console.log(this.rolesSrv.getRoles());
    console.log(this.permissonsSrv.getPermissions());
    return this.store.get('TOKEN') ? true : false;
  }

  getuser() {
    let header = new HttpHeaders().set('ad-token', localStorage.getItem('ad-token'));
    return this.http.get(`${this.backendurl}/admin/viewonestaff`, {
      headers: header,
    });
  }

  // get(){
  //   if(token){
  //     token = new
  //   }
  // }
}
