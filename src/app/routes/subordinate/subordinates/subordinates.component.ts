import { MatCheckbox } from '@angular/material/checkbox';
import { UserService } from 'app/user.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubordinatesComponent implements OnInit {
  //table
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

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
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
        minWidth: 120,
        width: '120px',
        pinned: 'right',
        type: 'button',
        buttons: [
          {
            type: 'icon',
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

  edit(value: any) {
    const dialogRef = this.dialog.open(AddSubordinateFormComponent, {
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

  openSubordinate() {
    let adddailogRef = this.dialog.open(AddSubordinateFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      // this.getallusers();
      console.log('Dailog Closed');
    });
  }

  getallstaff() {
    this.userService.viewadminstaff().subscribe(
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

  //viewadminstaff()
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
  templateUrl: 'add-subordinates-form.html',
})
export class AddSubordinateFormComponent implements OnInit {
  addstaffform: FormGroup;
  editmode: Boolean = false;
  id: any;
  allroles: any;

  falseValue = 'false';
  trueValue = 'true';

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddSubordinateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addstaffform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      //password: ['', [Validators.required]],
      role: [{ value: '' }, [Validators.required]],
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
        // password: this.data?.record?.password ? this.data?.record?.password : 'null',
        role: this.data?.record?.role ? this.data?.record?.role._id : 'null',
        // added_by: this.data?.record?.added_by ? this.data?.record?.added_by?._id : 'null',
        approvedstatus: this.data?.record?.approvedstatus
          ? this.data?.record?.approvedstatus
          : false,
      });
    }
  }
  ngOnInit(): void {
    this.getallroles();
  }

  submituserform() {
    console.log(this.addstaffform.value);
  }

  getallroles() {
    this.userService.getroleslowerthanme().subscribe(
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
}
