import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'app/user.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  Inject,
  HostBinding,
} from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, AfterViewInit {
  columns = [];
  list = [];
  total = 0;
  isLoading: Boolean;
  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = true;
  showPaginator = true;
  expandable = true;
  columnResizable = false;
  filteredData: any;

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private rolesSrv: NgxRolesService,
    private permissonsSrv: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.getallusers();
    console.log(this.rolesSrv.getRoles());
    console.log(this.permissonsSrv.getPermissions());

    this.columns = [
      { header: 'Avatar', field: 'userimg', type: 'image' },
      {
        header: 'Name',
        sortable: true,
        field: 'firstname',
        formatter: (data: any) =>
          `<a routerLink="/${data._id}"> ${data.firstname} ${data.lastname}</a>`,
        width: '150px',
      },
      { header: 'Mobile', sortable: true, field: 'mobile' },
      { header: 'Email', sortable: true, field: 'email' },
      { header: 'Organization', sortable: true, field: 'organization_name' },
      { header: 'DID Number', sortable: true, field: 'alloted_did.did_no' },
      { header: 'Created Date', sortable: true, field: 'createdAt' },
      {
        header: 'Actions',
        field: 'action',
        minWidth: 180,
        width: '180px',
        pinned: 'right',
        type: 'button',
        buttons: [
          {
            type: 'icon',
            color: 'primary',
            icon: 'visibility',
            tooltip: 'view',
            click: record => this.router.navigate(['user/user-detail', record._id]),
          },
          {
            type: 'icon',
            color: 'accent',
            icon: 'edit',
            tooltip: 'edit',
            click: record => this.edit(record),
          },
          {
            color: 'warn',
            icon: 'delete',
            text: 'delete',
            tooltip: 'delete',
            pop: true,
            popTitle: 'Confirm Delete',
            popCloseText: 'Cancel',
            popOkText: 'Delete',
            click: record => this.delete(record),
          },
        ],
      },
    ];
  }

  changeSort(e) {
    console.log(e);
  }

  changeSelect(e) {
    console.log(e);
  }

  getallusers() {
    this.userService.allusers().subscribe(
      (response: any) => {
        console.log('%cusers.component.ts line:54 response', 'color: #26bfa5;', response);
        this.list = response.data;
        this.total = response.data.length;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error => {
        console.log(
          '%cerror users.component.ts line:62 ',
          'color: red; display: block; width: 100%;',
          error
        );
      }
    );
  }

  edit(data) {
    let adddailogRef = this.dialog.open(AddUserFormComponent, {
      width: '500px',
      data: { record: data },
    });

    adddailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallusers();
    });
  }

  delete(data) {
    this.userService.deleteuser(data._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallusers();
        this.cdr.detectChanges();
        this.dialogx.alert(`You have deleted ${data.firstname} ${data.lastname}!`);
      },
      error => {
        console.log(
          '%cerror ips.component.ts line:254 ',
          'color: red; display: block; width: 100%;',
          error
        );
      }
    );
  }

  openAddDstNumber() {
    let adddailogRef = this.dialog.open(AddUserFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallusers();
      this.getallusers();
      this.getallusers();
    });
  }

  searchData(searchValue: any) {
    if (searchValue) {
      this.filteredData = this.list.filter((item: any) => {
        return (
          item.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.organization_name.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    } else {
      this.filteredData = null;
      this.getallusers();
    }
  }

  ngAfterViewInit() {
    this.isLoading = true;
  }

  pagechange(e) {
    console.log(e);
  }
}

@Component({
  selector: 'add-user-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-user-form.html',
})
export class AddUserFormComponent implements OnInit {
  adduserform: FormGroup;
  editmode: Boolean = false;
  id: any;
  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.adduserform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      organization_name: ['', [Validators.required]],
    });

    if (data) {
      console.log(data);
      this.editmode = true;
      this.id = this.data?.record?._id;
      this.adduserform.setValue({
        firstname: this.data?.record?.firstname ? this.data?.record?.firstname : 'null',
        lastname: this.data?.record?.lastname ? this.data?.record?.lastname : 'null',
        email: this.data?.record?.email ? this.data?.record?.email : 'null',
        mobile: this.data?.record?.mobile ? this.data?.record?.mobile : 'null',
        password: this.data?.record?.password ? this.data?.record?.password : 'null',
        organization_name: this.data?.record?.organization_name
          ? this.data?.record?.organization_name
          : 'null',
      });
    }
  }

  ngOnInit(): void {}

  getErrorMessage(form: FormGroup) {
    return form.get('firstname').hasError('required')
      ? 'validations.required'
      : form.get('lastname').hasError('required')
      ? 'validations.required'
      : form.get('email').hasError('required')
      ? 'validations.required'
      : '';
  }

  isFieldValid(field: string) {
    return !this.adduserform.get(field).valid && this.adduserform.get(field).touched;
  }

  submituserform() {
    if (this.editmode) {
      console.log(this.adduserform.value);
      this.userService.edituser(this.id, this.adduserform.value).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open('User Edited Successfully!', '', { duration: 2000 });
          this.adduserform.reset();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      if (this.adduserform.valid) {
        console.log(this.adduserform.value);
        this.userService.usersignup(this.adduserform.value).subscribe(
          (response: any) => {
            console.log(response);
            this.snackBar.open('User Added Successfully!', '', { duration: 2000 });
            this.adduserform.reset();
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.getErrorMessage(this.adduserform);
      }
    }
  }
}
