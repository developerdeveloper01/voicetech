import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/interface';
import { Router } from '@angular/router';
import { AdminAuthService } from '@core/authentication/admin-auth.service';

@Component({
  selector: 'app-user-panel',
  template: `
    <div class="matero-user-panel" fxLayout="column" fxLayoutAlign="center center">
      <img
        class="matero-user-panel-avatar"
        [src]="User?.staffimg || user.avatar"
        alt="avatar"
        width="64"
      />
      <h4 class="matero-user-panel-name">
        {{ User?.firstname || user.name }} {{ User?.lastname }}
      </h4>
      <h5 class="matero-user-panel-email">{{ User?.email || user.email }}</h5>
      <div class="matero-user-panel-icons">
        <a routerLink="/profile/overview" mat-icon-button>
          <mat-icon class="icon-20">account_circle</mat-icon>
        </a>
        <a routerLink="/profile/settings" mat-icon-button>
          <mat-icon class="icon-20">settings</mat-icon>
        </a>
        <a (click)="logout()" mat-icon-button>
          <mat-icon class="icon-20">exit_to_app</mat-icon>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  user: User;
  User: any;

  constructor(
    private router: Router,
    private auth: AuthService,
    private adminauth: AdminAuthService
  ) {
    this.adminauth.getuser().subscribe((response: any) => {
      console.log(response.data);
      this.User = response.data;
    });
  }

  ngOnInit(): void {
    this.auth.user().subscribe(user => (this.user = user));
  }

  logout() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
  }
}
