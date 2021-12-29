import { UserService } from 'app/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { iif, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { TokenService } from '../authentication/token.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private menuReq$ = this.http.get('/me/menu');
  private header = new HttpHeaders().set('ad-token', localStorage.getItem('ad-token'));
  private userpermissions$ = this.http.get(`http://localhost:6789/api/admin/viewonestaff`, {
    headers: this.header,
  });
  // let abcd = "";
  private backendurl = 'http://localhost:6789/api';
  constructor(
    private token: TokenService,
    private menu: MenuService,
    private http: HttpClient,
    private permissonsSrv: NgxPermissionsService,
    private rolesSrv: NgxRolesService,
    private userService: UserService
  ) {}

  /** Load the application only after get the menu or other essential informations such as roles and permissions. */
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.token
        .change()
        .pipe(
          switchMap(() => this.menuReq$),
          catchError(error => throwError(error))
        )
        .subscribe((response: any) => {
          console.log(response);
          this.menu.addNamespace(response.menu, 'menu');
          this.menu.set(response.menu);

          // Demo purposes only. You can add essential permissions and roles with your own cases.
          // const permissions = ['canRead'];

          // Tips: Alternative you can add permissions with role at the same time.
          // this.rolesSrv.addRolesWithPermissions({ ADMIN: permissions });

          resolve(null);
        });

      this.userpermissions$.subscribe(
        (data: any) => {
          console.log(data);
          console.log(data.data.role);
          console.table(data.data.role.permissions);
          // const rolename = data.data.role.permissions

          const permissions = ['canAdd', 'canEdit', 'canRead'];
          //const permissions = Object.keys(data.data.role);
          this.permissonsSrv.loadPermissions(data.data.role.permissions || permissions);
          // addRoleWithPermissions
          this.rolesSrv.addRoleWithPermissions(
            data.data.role.name,
            data.data.role.permissions || permissions
          );
          //this.rolesSrv.addRoles({ ADMIN: permissions });
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  // loaddynamicpermissions(){
  //   let header = new HttpHeaders().set(
  //     'ad-token',
  //     localStorage.getItem('ad-token')
  //   );
  //   return this.http.get(`${this.backendurl}/admin/viewonestaff`, {
  //     headers: header,
  //   })
  // }
}
