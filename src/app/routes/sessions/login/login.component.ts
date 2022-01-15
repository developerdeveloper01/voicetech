import { AdminAuthService } from './../../../core/authentication/admin-auth.service';
import { UserService } from './../../../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { LocalStorageService } from '@shared';
import { TokenService } from '@core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private userservice: UserService,
    private store: LocalStorageService,
    private token: TokenService,
    private authserv: AdminAuthService,
    private permissonsSrv: NgxPermissionsService,
    private rolesSrv: NgxRolesService,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember_me: [false],
    });
  }

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('remember_me');
  }

  private key = 'TOKEN';

  login() {
    this.userservice.stafflogin(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.ad_token);
        if(response.staff.role){
          const permissions = ['canAdd', 'canEdit', 'canRead'];
          //const permissions = Object.keys(data.data.role);
          this.permissonsSrv.loadPermissions(response.staff.role.permissions || permissions);
          // addRoleWithPermissions
          this.rolesSrv.addRoleWithPermissions(
            response.staff.role.name,
            response.staff.role.permissions || permissions
          );
        }
        /// this.store.set(this.key, response.ad_token);
        this.authserv.set(response.ad_token);
        localStorage.setItem('ad-token', response.ad_token);
        this.router.navigateByUrl('/');
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

    // this.auth
    //   .login(this.username.value, this.password.value, this.rememberMe.value)
    //   .pipe(filter(authenticated => authenticated))
    //   .subscribe(
    //     () => this.router.navigateByUrl('/'),
    //     (error: HttpErrorResponse) => {
    //       if (error.status === 422) {
    //         const form = this.loginForm;
    //         const errors = error.error.errors;
    //         Object.keys(errors).forEach(key => {
    //           form.get(key === 'email' ? 'username' : key)?.setErrors({
    //             remote: errors[key][0],
    //           });
    //         });
    //       }
    //     }
    //   );
  }
}
