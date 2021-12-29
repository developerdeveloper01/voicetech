import { MenuService } from './../../../../../../../src/app/core/bootstrap/menu.service';
import { TokenService } from './../../../../../../../src/app/core/authentication/token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iif, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
// import { MenuService } from './menu.service';
//import { TokenService } from '../authentication/token.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { AdminAuthService } from '@core/authentication/admin-auth.service';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private menuReq$ = this.http.get('/me/menu');
  // private menuReq$ = this.http.get('assets/data/menu.json?_t=' + Date.now());

  constructor(
    private token: TokenService,
    private menu: MenuService,
    private http: HttpClient,
    private rolesSrv: NgxRolesService,
    private permissonsSrv: NgxPermissionsService,
    private adminauth: AdminAuthService
  ) {}

  /** Load the application only after get the menu or other essential informations such as roles and permissions. */
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.token
        .change()
        .pipe(
          switchMap(() => iif(() => this.token.valid(), this.menuReq$, of({ menu: [] }))),
          catchError(error => throwError(error))
        )
        .subscribe((response: any) => {
          console.log(response);
          this.menu.addNamespace(response.menu, 'menu');
          this.menu.set(response.menu);

          // Demo purposes only. You can add essential permissions and roles with your own cases.
          const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
          this.permissonsSrv.loadPermissions(permissions);
          this.rolesSrv.addRoles({ ADMIN: permissions });

          // Tips: Alternative you can add permissions with role at the same time
          // this.rolesSrv.addRolesWithPermissions({ ADMIN: permissions });

          resolve(null);
        });
    });
  }
}
