import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import PhotoViewer from 'photoviewer';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { UserService } from 'app/user.service';
import { TablesRemoteDataService } from '../../staff/staff/remote-data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class StaffComponent implements OnInit, AfterViewInit {
  columns = [];
  list = [];
  total = 0;
  isLoading = true;
  allroles: any;
  filteredData: any;

  multiSelectable = false;
  rowSelectable = false;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = true;
  showPaginator = true;
  expandable = false;
  columnResizable = false;

  query = {
    q: 'user:nzbin',
    sort: 'stars',
    order: 'desc',
    page: 0,
    per_page: 10,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  falseValue = 'false';
  trueValue = 'true';

  addstaffform: FormGroup;

  constructor(
    private remoteSrv: TablesRemoteDataService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    private snackBar: MatSnackBar,
    private permissionsSrv: NgxPermissionsService
  ) {
    this.addstaffform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      approvedstatus: [false],
    });
  }

  ngOnInit() {
    this.getallroles();
    this.getallstaff();

    this.columns = [
      {
        header: 'Avatar',
        field: 'staffimg',
        type: 'image',
      },
      {
        header: 'Name',
        field: 'name',
        formatter: (data: any) => `${data.firstname} ${data.lastname} `,
      },
      { header: 'Email', sortable: true, field: 'email' },
      { header: 'Mobile', sortable: true, field: 'mobile' },
      {
        header: 'Role',
        field: 'role.name',
        formatter: (data: any) => `<span class="label">${data?.role?.name}</span>`,
      },
      {
        header: 'Added By',
        field: 'added_by.firstname',
        formatter: (data: any) =>
          `<span (click)="viewadmin()" class="admin-dy-class">${data?.added_by?.firstname}</span>`,
      },
      {
        header: 'Approved',
        field: 'approvedstatus',
        type: 'tag',
        tag: {
          true: { text: 'Yes', color: 'red-100' },
          false: { text: 'No', color: 'green-100' },
        },
      },
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
            click: record => this.router.navigate(['staff/staff-detail', record._id]),
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

  searchData(searchValue: any) {
    if (searchValue) {
      this.filteredData = this.list.filter((item: any) => {
        return (
          item.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.lastname.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.email.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    } else {
      this.filteredData = null;
      this.getallstaff();
    }
  }

  edit(value: any) {
    const dialogRef = this.dialog.open(EditStaffFormComponent, {
      width: '500px',
      data: { record: value },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.getallstaff();
    });
  }

  delete(data: any) {
    this.userService.deletestaff(data._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallstaff();
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

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  viewadmin() {
    console.log('radha ganj');
  }

  enableRowExpandable() {
    this.columns[0].showExpand = this.expandable;
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
    console.log(checkbox.value);
  }

  getallroles() {
    this.userService.getallroles().subscribe(
      (response: any) => {
        console.log(response);

        this.allroles = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  openAddStaff() {
    let adddailogRef = this.dialog.open(AddStaffFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      console.log('closed');
      this.getallstaff();
      this.getallstaff();
      this.getallstaff();
    });
  }

  submitstaffForm() {
    console.log(this.addstaffform.value);

    this.userService.addstaff(this.addstaffform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.snackBar.open('Staff Added Successfully!', '', { duration: 2000 });
        this.addstaffform.reset();
        this.addstaffform.markAsUntouched();
        console.log(this.addstaffform.getError);
        this.getallstaff();
      },
      error => {
        console.log(error);
      }
    );
  }

  getallstaff() {
    this.userService.getallstaff().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.list = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    this.isLoading = false;
  }
}

@Component({
  selector: 'add-staff-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-staff-form.html',
})
export class AddStaffFormComponent implements OnInit {
  addstaffform: FormGroup;
  editmode: Boolean = false;
  id: any;
  allroles: any;
  allstaff: any;

  falseValue = 'false';
  trueValue = 'true';
  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddStaffFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addstaffform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      added_by: ['', [Validators.required]],
      approvedstatus: [false],
    });

    if (data) {
      console.log(data);
      this.editmode = true;
      this.id = this.data?.record?._id;
      this.addstaffform.setValue({
        firstname: this.data?.record?.firstname ? this.data?.record?.firstname : 'null',
        lastname: this.data?.record?.lastname ? this.data?.record?.lastname : 'null',
        email: this.data?.record?.email ? this.data?.record?.email : 'null',
        mobile: this.data?.record?.mobile ? this.data?.record?.mobile : 'null',
        password: this.data?.record?.password ? this.data?.record?.password : 'null',
        role: this.data?.record?.role ? this.data?.record?.role._id : 'null',
        added_by: this.data?.record?.added_by ? this.data?.record?.added_by?._id : 'null',
        approvedstatus: this.data?.record?.approvedstatus
          ? this.data?.record?.approvedstatus
          : false,
      });
    }
  }

  ngOnInit(): void {
    this.getallroles();
    this.getallstaff();
  }

  getErrorMessage(form: FormGroup) {
    return form.get('firstname').hasError('required')
      ? 'validations.required'
      : form.get('lastname').hasError('required')
      ? 'validations.required'
      : form.get('email').hasError('required')
      ? 'validations.required'
      : '';
  }

  submitstaffForm() {
    if (this.editmode) {
      console.log(this.addstaffform.value);
      this.userService.editstaff(this.id, this.addstaffform.value).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open('User Edited Successfully!', '', { duration: 2000 });
          this.addstaffform.reset();
          this.dialogRef.close();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      if (this.addstaffform.valid) {
        console.log(this.addstaffform.value);
        this.userService.addstaff(this.addstaffform.value).subscribe(
          (response: any) => {
            console.log(response);
            this.snackBar.open('Staff Added Successfully!', '', { duration: 2000 });
            this.addstaffform.reset();
            this.addstaffform.markAsUntouched();
            this.dialogRef.close();
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.getErrorMessage(this.addstaffform);
      }
    }
  }

  getallroles() {
    this.userService.getallroles().subscribe(
      (response: any) => {
        console.log(response);

        this.allroles = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
    console.log(checkbox.value);
  }

  getallstaff() {
    this.userService.getallstaff().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.allstaff = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'edit-staff-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './edit-staff-form.html',
})
export class EditStaffFormComponent implements OnInit {
  addstaffform: FormGroup;
  editmode: Boolean = false;
  id: any;
  allroles: any;
  allstaff: any;

  falseValue = 'false';
  trueValue = 'true';
  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditStaffFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addstaffform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      role: ['', [Validators.required]],
      added_by: ['', [Validators.required]],
      approvedstatus: [false],
    });

    if (data) {
      console.log(data);
      this.editmode = true;
      this.id = this.data?.record?._id;
      this.addstaffform.setValue({
        firstname: this.data?.record?.firstname ? this.data?.record?.firstname : 'null',
        lastname: this.data?.record?.lastname ? this.data?.record?.lastname : 'null',
        email: this.data?.record?.email ? this.data?.record?.email : 'null',
        mobile: this.data?.record?.mobile ? this.data?.record?.mobile : 'null',
        role: this.data?.record?.role ? this.data?.record?.role._id : 'null',
        added_by: this.data?.record?.added_by ? this.data?.record?.added_by?._id : 'null',
        approvedstatus: this.data?.record?.approvedstatus
          ? this.data?.record?.approvedstatus
          : false,
      });
    }
  }

  ngOnInit(): void {
    this.getallroles();
    this.getallstaff();
  }

  getErrorMessage(form: FormGroup) {
    return form.get('firstname').hasError('required')
      ? 'validations.required'
      : form.get('lastname').hasError('required')
      ? 'validations.required'
      : form.get('email').hasError('required')
      ? 'validations.required'
      : '';
  }

  submitstaffForm() {
    if (this.editmode) {
      console.log(this.addstaffform.value);
      this.userService.editstaff(this.id, this.addstaffform.value).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open('User Edited Successfully!', '', { duration: 2000 });
          this.addstaffform.reset();
          this.dialogRef.close();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      if (this.addstaffform.valid) {
        console.log(this.addstaffform.value);
        this.userService.addstaff(this.addstaffform.value).subscribe(
          (response: any) => {
            console.log(response);
            this.snackBar.open('Staff Added Successfully!', '', { duration: 2000 });
            this.addstaffform.reset();
            this.addstaffform.markAsUntouched();
            this.dialogRef.close();
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.getErrorMessage(this.addstaffform);
      }
    }
  }

  getallroles() {
    this.userService.getallroles().subscribe(
      (response: any) => {
        console.log(response);

        this.allroles = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
    console.log(checkbox.value);
  }

  getallstaff() {
    this.userService.getallstaff().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.allstaff = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
