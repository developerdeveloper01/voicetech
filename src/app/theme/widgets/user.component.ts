import { AdminAuthService } from './../../core/authentication/admin-auth.service';
import { UserService } from 'app/user.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { debounceTime, tap } from 'rxjs/operators';
import { User } from '@core/authentication/interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  template: `
    <button
      class="matero-toolbar-button matero-avatar-button"
      mat-button
      [matMenuTriggerFor]="menu"
    >
      <img class="matero-avatar" [src]="User?.staffimg || user.avatar" width="32" alt="avatar" />
      <span class="matero-username" fxHide.lt-sm
        >{{ User?.firstname}} {{ User?.lastname }} |
        <span class="p-8 r-16 bg-blue-300 text-white">{{ User?.role?.name }}</span></span
      >
    </button>

    <mat-menu #menu="matMenu">
      <button routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>{{ 'user.profile' | translate }}</span>
      </button>
      <button routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>{{ 'user.settings' | translate }}</span>
      </button>
      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>{{ 'user.logout' | translate }}</span>
      </button>
    </mat-menu>
  `,
})
export class UserComponent implements OnInit {
  user: User;
  User: any;
  loading: boolean = true;

  constructor(
    private router: Router,
    private auth: AuthService,
    private adminauth: AdminAuthService,
    private cdr: ChangeDetectorRef,
    private userService: UserService
  ) {
    this.adminauth.getuser().subscribe((response: any) => {
      this.User = response.data;
    });
  }

  ngOnInit(): void {
    this.auth
      .user()
      .pipe(
        tap(user => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.cdr.detectChanges());
  }

  logout() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
  }

  // getuser(){
  //   this.adminauth.getuser().subscribe((response:any)=>{
  //     console.log(response);
  //     this.User = response.data;
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }
}
