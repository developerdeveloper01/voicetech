import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-permissions-route-guard',
  templateUrl: './route-guard.component.html',
  styleUrls: ['./route-guard.component.scss'],
})
export class PermissionsRouteGuardComponent implements OnInit {
  currentRole: string;

  currentPermissions: string[];

  permis = {
    SUPERADMIN: [
      'canAddStaff',
      'canDeleteStaff',
      'canEditStaff',
      'canReadStaff',
      'canAddUser',
      'canDeleteUser',
      'canEditUser',
      'canReadUser',
      'canAddNumber',
      'canDeleteNumber',
      'canEditNumber',
      'canReadNumber',
      'canAddSIP',
      'canDeleteSIP',
      'canEditSIP',
      'canReadSIP',
      'canAddEnquiry',
      'canDeleteEnquiry',
      'canEditEnquiry',
      'canReadEnquiry',
      'canAddChat',
      'canDeleteChat',
      'canEditChat',
      'canReadChat',
      'canAddPlan',
      'canDeletePlan',
      'canEditPlan',
      'canReadPlan',
      'canAddReport',
      'canDeleteReport',
      'canEditReport',
      'canReadReport',
    ],
  };

  permissionsOfRole = {
    SUPERADMIN: [
      'canAdd',
      'canDelete',
      'canEdit',
      'canRead',
      'canAddStaff',
      'canDeleteStaff',
      'canEditStaff',
      'canReadStaff',
      'canAddUser',
      'canDeleteUser',
      'canEditUser',
      'canReadUser',
      'canAddNumber',
      'canDeleteNumber',
      'canEditNumber',
      'canReadNumber',
      'canAddSIP',
      'canDeleteSIP',
      'canEditSIP',
      'canReadSIP',
      'canAddEnquiry',
      'canDeleteEnquiry',
      'canEditEnquiry',
      'canReadEnquiry',
      'canAddChat',
      'canDeleteChat',
      'canEditChat',
      'canReadChat',
      'canAddPlan',
      'canDeletePlan',
      'canEditPlan',
      'canReadPlan',
      'canAddReport',
      'canDeleteReport',
      'canEditReport',
      'canReadReport',
    ],
    ADMIN: ['canAdd', 'canEdit', 'canRead'],
    MANAGER: ['canAdd', 'canRead'],
    RESELLER: ['canAdd', 'canRead'],
    GUEST: ['canRead'],
  };

  constructor(
    private rolesSrv: NgxRolesService,
    private permissionsSrv: NgxPermissionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentRole = Object.keys(this.rolesSrv.getRoles())[0];
    console.log(this.currentRole);
    this.currentPermissions = Object.keys(this.permissionsSrv.getPermissions());
    console.log(this.currentPermissions);
  }

  onPermissionChange() {
    this.currentPermissions = this.permissionsOfRole[this.currentRole];
    console.log(this.permissionsOfRole[this.currentRole]);
    this.rolesSrv.flushRolesAndPermissions();
    this.rolesSrv.addRoleWithPermissions(this.currentRole, this.currentPermissions);

    // this.router.navigateByUrl('/dashboard');
  }
}
