import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'app/user.service';
import { TablesRemoteDataService } from 'app/routes/service/service/monitoring/agent-table/remote-data.service';
import { Subscription } from 'rxjs';
import { DateAdapter } from '@angular/material/core';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class IpsComponent implements OnInit, AfterViewInit, OnDestroy {
  toggleeditrole: boolean = true;
  addipform: FormGroup;
  editipform: FormGroup;

  falseValue = 'false';
  trueValue = 'true';

  translateSubscription: Subscription;

  columns: MtxGridColumn[] = [
    { header: 'IP', sortable: true, field: 'ipnumber' },
    { header: 'Provider', sortable: true, field: 'title' },
    {
      header: 'Active Status',
      field: 'activestatus',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'green-200' },
        false: { text: 'No', color: 'red-200' },
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
          click: record => this.openEditIp(record),
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

  //table
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
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private dateAdapter: DateAdapter<any>,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    public dialogx: MtxDialog
  ) {
    this.addipform = this.fb.group({
      ipnumber: ['', [Validators.required]],
      title: ['', [Validators.required]],
      activestatus: [false],
    });

    this.editipform = this.fb.group({
      ipnumber: ['', [Validators.required]],
      title: ['', [Validators.required]],
      activestatus: [false],
    });
  }

  displayedColumns: string[] = ['ipnumber', 'title', 'activestatus', 'actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getallips();
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  edit(value: any) {
    const dialogRef = this.dialogx.originalOpen(TablesKitchenSinkEditComponent, {
      width: '900px',
      data: { record: value },
    });
    const onOk = () => {
      this.dialogx.alert('Closed');
    };
    // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');
    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  delete(value: any) {
    this.userService.deleteip(value._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallips();
        this.cdr.detectChanges();
        this.dialogx.alert(`You have deleted ${value.title}!`);
      },
      error => {
        console.log(
          '%cerror ips.component.ts line:254 ',
          'color: red; display: block; width: 100%;',
          error
        );
      }
    )
  }

  getallips() {
    this.userService.getallips().subscribe(
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

  getErrorMessage(addipform: FormGroup) {
    return addipform.get('ipnumber').hasError('required')
      ? 'validations.required'
      : addipform.get('title').hasError('required')
      ? 'validations.required'
      : '';
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  submitipForm() {
    console.log(this.addipform.value);
    this.userService.addip(this.addipform.value).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.snackBar.open('IP Added Successfully!', '', { duration: 2000 });
        this.addipform.reset();
        this.getallips();
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

  ngAfterViewInit() {
    this.isLoading = false;
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  openAddIp() {
    let adddailogRef = this.dialog.open(AddIpFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallips();
    });
  }

  openEditIp(value) {
    let editdailogRef = this.dialog.open(EditIpFormComponent, {
      width: '500px',
      data: { record: value },
    });

    editdailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallips();
    });
  }
}

@Component({
  selector: 'add-ip-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-ip-form.html',
})
export class AddIpFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  addip: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.addip = this.fb.group({
      ipnumber: [
        '',
        [
          Validators.required,
          Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
        ],
      ],
      title: ['', [Validators.required]],
      activestatus: [false],
    });
  }

  ngOnInit(): void {}

  getErrorMessage(form: FormGroup) {
    return form.get('ipnumber').hasError('required')
      ? 'This field is required'
      : form.get('ipnumber').hasError('pattern')
      ? 'Pattern doesnt match should be XXX.XXX.XXX.XXX.'
      : '';
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  submitip() {
    if (this.addip.valid) {
      this.userService.addip(this.addip.value).subscribe(
        (response: any) => {
          console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
          this.snackBar.open('IP Added Successfully!', '', { duration: 2000 });
          this.addip.reset();
          //this.addip.markAsUntouched();
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
      this.getErrorMessage(this.addip);
    }
  }

  isFieldValid(field: string) {
    return !this.addip.get(field).valid && this.addip.get(field).touched;
  }
}


@Component({
  selector: 'edit-ip-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './edit-ip-form.html',
})
export class EditIpFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  editip: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditIpFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);

    this.editip = this.fb.group({
      ipnumber: [
        '',
        [
          Validators.required,
          Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'),
        ],
      ],
      title: ['', [Validators.required]],
      activestatus: [false],
    });
  }

  ngOnInit(): void {
    this.editip.setValue({
      ipnumber: this.data?.record?.ipnumber ? this.data?.record?.ipnumber : 'null',
      title: this.data?.record?.title ? this.data?.record?.title : 'null',
      activestatus: this.data?.record?.activestatus ? true : false,
    });
  }

  getErrorMessage(form: FormGroup) {
    return form.get('ipnumber').hasError('required')
      ? 'This field is required'
      : form.get('ipnumber').hasError('pattern')
      ? 'Pattern doesnt match should be XXX.XXX.XXX.XXX.'
      : '';
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

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  isFieldValid(field: string) {
    return !this.editip.get(field).valid && this.editip.get(field).touched;
  }

  submiteditip() {
    console.log(this.editip.value);

    if (this.editip.valid) {
      this.userService.editip(this.data.record._id, this.editip.value).subscribe(
        (response: any) => {
          console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
          this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
          this.editip.reset();
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
      this.getErrorMessage(this.editip);
    }
  }


}

