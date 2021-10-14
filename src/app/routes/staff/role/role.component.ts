import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'app/user.service';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MtxAlertComponent, MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TablesRemoteDataService } from 'app/routes/service/service/monitoring/agent-table/remote-data.service';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class RoleComponent implements OnInit, AfterViewInit, OnDestroy {
  q = {
    username: '',
    email: '',
    gender: '',
  };
  toggleeditrole: boolean = true;
  reactiveForm1: FormGroup;
  reactiveForm2: FormGroup;
  addroleform: FormGroup;

  translateSubscription: Subscription;

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

  columns: MtxGridColumn[] = [
    { header: 'Name', sortable: true, field: 'name',showExpand: true  },
    { header: 'Status', sortable: true, field: 'status' },
    {
      header: 'Read Call Details',
      field: 'r_calldetails',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Write Call Details',
      field: 'w_calldetails',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Read IVR',
      field: 'r_ivr',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Write IVR',
      field: 'w_ivr',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Read SIP',
      field: 'r_sip',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Write SIP',
      field: 'w_sip',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Read User Details',
      field: 'r_userdetails',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
      },
    },
    {
      header: 'Write User Details',
      field: 'w_userdetails',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-100' },
        false: { text: 'No', color: 'red-100' },
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

  //table
  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = false;
  showPaginator = true;
  expandable = true;
  columnResizable = true;

  constructor(
    private remoteSrv: TablesRemoteDataService,
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialog: MtxDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.reactiveForm1 = this.fb.group({
      username: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: [''],
      address: [''],
      company: [''],
      tele: [''],
      website: [''],
      date: [''],
    });

    this.addroleform = this.fb.group({
      name: ['', [Validators.required]],
      r_calldetails: [false],
      w_calldetails: [false],
      r_userdetails: [false],
      w_userdetails: [false],
      r_sip: [false],
      w_sip: [false],
      r_ivr: [false],
      w_ivr: [false],
    });
  }

  displayedColumns: string[] = [
    'role',
    'r_calldetails',
    'w_calldetails',
    'r_userdetails',
    'w_userdetails',
    'r_sip',
    'w_sip',
    'r_ivr',
    'w_ivr',
    'actions',
  ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getData();
    this.getallroles();
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  getErrorMessage(addroleform: FormGroup) {
    return addroleform.get('name').hasError('required')
      ? 'validations.required'
      : addroleform.get('email').hasError('email')
      ? 'validations.invalid_email'
      : '';
  }

  editrole() {
    console.log('button clicked');
    if (this.toggleeditrole == false) {
      this.toggleeditrole = true;
    } else {
      this.toggleeditrole = false;
    }
  }

  editonerole(id) {
    this.toggleeditrole = false;
    this.userService.viewonerole(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteonerole(id) {
    //console.log(id);
    this.snackBar.open('Operation not allowed', '', { duration: 2000 });
  }

  submitroleForm() {
    console.log(this.addroleform.value);
    this.userService.addrole(this.addroleform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.snackBar.open('Role Added Successfully!', '', { duration: 2000 });
        this.addroleform.reset();
        this.getallroles();
      },
      error => {
        console.log(error);
      }
    );
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  getallroles() {
    this.userService.getallroles().subscribe(
      (response: any) => {
        console.log('%crole.component.ts line:311 response', 'color: #26bfa5;', response);
        this.list = response.data;
        this.isLoading = false;
      },
      error => {
        console.log('%cerror role.component.ts line:318 ', 'color: red; display: block; width: 100%;', error);
      }
    );
  }

  canceledit() {
    console.log('Cancel Requested');
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
      width: '900px',
      data: { record: value },
    });
    // const onOk = () => {
    //   this.dialog.alert('Closed');
    // };
    // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');
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
}
