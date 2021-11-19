import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import PhotoViewer from 'photoviewer';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { UserService } from 'app/user.service';
import { TablesRemoteDataService } from '../../staff/staff/remote-data.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class StaffComponent implements OnInit {
  toggleeditstaff: boolean = true;
  columns: MtxGridColumn[] = [
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
    { header: 'Role', sortable: true, field: 'role.name' },
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
  list = [];
  total = 0;
  isLoading = true;
  allroles: any;

  multiSelectable = true;
  rowSelectable = true;
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
    public dialog: MtxDialog,
    private snackBar: MatSnackBar
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
    this.getData();
    this.getallroles();
    this.getallstaff();
  }

  getData() {
    this.isLoading = true;

    this.remoteSrv.getData(this.params).subscribe(
      res => {
        //this.list = res.items;
        this.total = res.total_count;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    );
  }

  edit(value: any) {
    const dialogRef = this.dialog.originalOpen(TablesKitchenSinkEditComponent, {
      width: '600px',
      data: { record: value },
    });

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  delete(value: any) {
    this.dialog.alert(`You have deleted ${value.position}!`);
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.getData();
  }

  search() {
    this.query.page = 0;
    this.getData();
  }

  editstaffchk() {
    console.log('button clicked');
    if (this.toggleeditstaff == false) {
      this.toggleeditstaff = true;
    } else {
      this.toggleeditstaff = false;
    }
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
        console.log('%cstaff.component.ts line:238 response', 'color: white; background-color: #007acc;', response);
        this.list = response.data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error => {
        console.log(error);

      }
    );
  }
}
