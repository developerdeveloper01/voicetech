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
import { MatDialog } from '@angular/material/dialog';

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
    { header: 'Name', sortable: true, field: 'name' },
    { header: 'Status', sortable: true, field: 'status' },
    {
      header: 'Permissions',
      field: 'permissions',
      showExpand: true,
      formatter: (data: any) => `<a
      >click here
    </a>`,
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
  allroles: any;

  //table
  list = [];
  total = 0;
  isLoading: Boolean;
  multiSelectable = false;
  rowSelectable = false;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = false;
  showPaginator = true;
  expandable = true;
  columnResizable = false;

  constructor(
    private remoteSrv: TablesRemoteDataService,
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialogx: MtxDialog,
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
        this.total = response.data.length;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error => {
        console.log(
          '%cerror role.component.ts line:318 ',
          'color: red; display: block; width: 100%;',
          error
        );
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
    const dialogRef = this.dialogx.originalOpen(TablesKitchenSinkEditComponent, {
      width: '90%',
      data: { record: value },
    });
    // const onOk = () => {
    //   this.dialog.alert('Closed');
    // };
    // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');
    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  delete(value: any) {
    console.log(value);
    this.userService.deleterole(value._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:304 response', 'color: #26bfa5;', response);
        this.snackBar.open('Role Deleted Successfully!', '', { duration: 2000 });
        //this.addroleform.reset();
        this.getallroles();
      },
      error => {
        console.log(
          '%cerror ips.component.ts line:311 ',
          'color: red; display: block; width: 100%;',
          error
        );
      }
    );
    this.dialogx.alert(`You have deleted ${value.name}!`);
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  openRole() {
    let adddailogRef = this.dialog.open(AddRoleFormComponent, { width: '1000px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallroles();
    });
  }
}

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'add-role-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }

      .demo-sub-list {
        margin-left: 20px;

        input[type='checkbox'] {
          visibility: hidden;
          &:checked + label {
            transform: rotate(360deg);
            background-color: #000;
            &:before {
              transform: translateX(90px);
              background-color: #fff;
            }
          }
        }

        label {
          display: flex;
          width: 180px;
          height: 90px;
          border: 6px solid;
          border-radius: 99em;
          position: relative;
          transition: transform 0.75s ease-in-out;
          transform-origin: 50% 50%;
          cursor: pointer;

          &:before {
            transition: transform 0.75s ease;
            transition-delay: 0.5s;
            content: '';
            display: block;
            position: absolute;
            width: 54px;
            height: 54px;
            background-color: #000;
            border-radius: 50%;
            top: 12px;
            left: 12px;
          }
        }
      }
    `,
  ],
  templateUrl: './add-role-form.html',
})
export class AddRoleFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';
  panelOpenState = false;

  addroleform: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.addroleform = this.fb.group({
      name: ['', [Validators.required]],
      status: [false],
      permissions: [],
    });
  }

  ngOnInit(): void {
    this.getallips();
  }

  tasks: any[] = [
    {
      name: 'Basic',
      completed: false,
      subtasks: [
        { name: 'Add', value: 'canAdd', completed: false },
        { name: 'Edit', value: 'canEdit', completed: false },
        { name: 'Read', value: 'canRead', completed: false },
        { name: 'Delete', value: 'canDelete', completed: false },
      ],
    },
    {
      name: 'Enquiry',
      completed: false,
      subtasks: [
        { name: 'View Enquiry', value: 'ViewEnquiry', completed: false },
        { name: 'Followup Enquiry', value: 'FollowupEnquiry', completed: false },
      ],
    },
    {
      name: 'Manage Staff',
      completed: false,
      subtasks: [
        { name: 'View Staff', value: 'ViewStaff', completed: false },
        { name: 'Add Staff', value: 'AddStaff', completed: false },
        { name: 'Edit Staff', value: 'EditStaff', completed: false },
        { name: 'Delete Staff', value: 'DeleteStaff', completed: false },
      ],
    },
    {
      name: 'DST Numbers',
      completed: false,
      subtasks: [
        { name: 'View DST Numbers', value: 'ViewDST', completed: false },
        { name: 'Add DST Numbers', value: 'AddDST', completed: false },
        { name: 'Edit DST Numbers', value: 'EditDST', completed: false },
        { name: 'Delete DST Numbers', value: 'DeleteDST', completed: false },
      ],
    },
    {
      name: 'IPs',
      completed: false,
      subtasks: [
        { name: 'View IPs', value: 'ViewIP', completed: false },
        { name: 'Add IPs', value: 'AddIP', completed: false },
        { name: 'Edit IPs', value: 'EditIP', completed: false },
        { name: 'Delete IPs', value: 'DeleteIP', completed: false },
      ],
    },
    {
      name: 'Plan',
      completed: false,
      subtasks: [
        { name: 'View Plan', value: 'ViewPlan', completed: false },
        { name: 'Add Plan', value: 'AddPlan', completed: false },
        { name: 'Edit Plan', value: 'EditPlan', completed: false },
        { name: 'Delete Plan', value: 'DeletePlan', completed: false },
      ],
    },
    {
      name: 'Chat',
      completed: false,
      subtasks: [
        { name: 'View Chat', value: 'ViewChat', completed: false },
        { name: 'Delete Chat', value: 'DeleteChat', completed: false },
      ],
    },
  ];

  allComplete(task: Task): boolean {
    //console.log(task);
    const subtasks = task.subtasks;
    return task.completed || (subtasks != null && subtasks.every(t => t.completed));
  }

  someComplete(tasks: Task[]): boolean {
    //console.log(tasks);
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    //console.log(tasks);
    tasks.forEach(t => (t.completed = completed));
  }

  updateAllComplete(task) {
    console.log(task);
  }

  getErrorMessage(form: FormGroup) {
    return form.get('name').hasError('required') ? 'validations.required' : '';
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  submitdstnumber() {
    let permissionsarr: any = [];
    this.tasks.forEach(index =>
      index.subtasks.forEach(element => {
        if (element.completed == true) {
          permissionsarr.push(element.value);
        }
        //console.log(element);
      })
    );
    console.log(permissionsarr);
    this.addroleform.setValue({
      name: this.addroleform.value.name,
      status: this.addroleform.value.status,
      permissions: permissionsarr,
    });
    if (this.addroleform.valid) {
      console.log(this.addroleform.value);
      this.userService.addrole(this.addroleform.value).subscribe(
        (response: any) => {
          console.log('%cips.component.ts line:511 response', 'color: #26bfa5;', response);
          this.snackBar.open('Role Added Successfully!', '', { duration: 2000 });
          this.addroleform.reset();
          //this.addroleform.markAsUntouched();
        },
        error => {
          console.log(
            '%cerror ips.component.ts line:254 ',
            'color: red; display: block; width: 100%;',
            error
          );
        }
      );
    } else {
      this.getErrorMessage(this.addroleform);
      console.log(this.getErrorMessage(this.addroleform));
    }
  }

  getallips() {
    this.userService.getallips().subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.allips = response.data;
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

  isFieldValid(field: string) {
    return !this.addroleform.get(field).valid && this.addroleform.get(field).touched;
  }
}
