import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'app/user.service';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'app-dstnumber',
  templateUrl: './dstnumber.component.html',
  styleUrls: ['./dstnumber.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DstnumberComponent implements OnInit, AfterViewInit {
  @ViewChild('statusTpl', { static: true }) statusTpl: TemplateRef<any>;

  showdeletebutton: any;

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
  allstaff: any;

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getallnumbers();
    this.getallstaff();
    this.columns = [
      { header: 'DID Number', sortable: true, field: 'alloted_did' },
      { header: 'IP', sortable: true, field: 'ip.ipnumber' },
      {
        header: 'Alloted to',
        field: 'giventolevel1.firstname',
      },
      {
        header: 'Use',
        field: 'is_used',
        sortable: true,
      },
      {
        header: 'Service',
        field: 'service_type',
        sortable: true,
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
            click: record => this.view(record),
          },
          {
            type: 'icon',
            color: 'accent',
            icon: 'edit',
            tooltip: 'edit',
            click: record => this.openEditDstNumber(record),
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
    const dialogRef = this.dialogx.originalOpen(TablesKitchenSinkEditComponent, {
      width: '900px',
      data: { record: value },
    });
    const onOk = () => {
      this.dialogx.alert('Closed');
    };

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  openEditDstNumber(value) {
    let editdailogRef = this.dialog.open(EditDstNumberFormComponent, {
      width: '500px',
      data: { record: value },
    });

    editdailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallnumbers();
    });
  }

  delete(value: any) {
    this.userService.deletenumber(value._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallnumbers();
        this.cdr.detectChanges();
        this.dialogx.alert(`You have deleted ${value.dstnumber}!`);
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

  view(value: any) {
    console.log(value);
  }

  openAddDstNumber() {
    let adddailogRef = this.dialog.open(AddDstNumberFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallnumbers();
    });
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changerowSelect(e: any) {
    console.table(e);
    e.map(a => console.log(a._id));
    this.showdeletebutton = true;
  }

  changecellSelect(e: any) {
    console.log(e);
  }

  allotmultiple() {
    console.log('todo');
  }

  foods = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Lemon' },
    { id: '3', name: 'Lime' },
    { id: '4', name: 'Orange', disabled: true },
    { id: '5', name: 'Strawberry' },
  ];

  staff: any;

  getallstaff() {
    this.userService.getallstaff().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.allstaff = response.data;
        this.staff = this.allstaff[0]._id;
      },
      error => {
        console.log(error);
      }
    );
  }

  changeSort(e: any) {
    console.log(e);
  }

  getallnumbers() {
    this.userService.getalldstnumbers().subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.list = response.data;
        this.total = response.data.length;
        this.isLoading = false;
        this.cdr.detectChanges();
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
    this.isLoading = true;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
}

@Component({
  selector: 'add-dst-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-dst-form.html',
})
export class AddDstNumberFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  adddstnumber: FormGroup;
  allips: any;
  allstaff: any;
  allusers: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.adddstnumber = this.fb.group({
      ip: ['', [Validators.required]],
      assign: [''],
      assignm: [''],
      did_no: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      inusestatus: [false],
      alottedtouser: [''],
      is_used: ['f'],
      itsp_name: ['Tata'],
      voice_channel: [],
      service_type: ['open'],
    });
  }

  ngOnInit(): void {
    this.getallips();
    this.getallstaff();
    this.getallusers();
  }

  getErrorMessage(form: FormGroup) {
    return form.get('did_no').hasError('required')
      ? 'validations.required'
      : form.get('did_no').hasError('min')
      ? 'validations.min'
      : form.get('did_no').hasError('max')
      ? 'validations.max'
      : '';
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  submitdstnumber() {
    if (this.adddstnumber.valid) {
      this.adddstnumber.controls.alottedtouser.setValue(this.adddstnumber.controls.assignm.value);
      console.log('*********************************', this.adddstnumber.value);
      this.userService.adddstnumber(this.adddstnumber.value).subscribe(
        (response: any) => {
          console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
          this.snackBar.open('DST Number Added Successfully!', '', { duration: 2000 });
          this.adddstnumber.reset();
          //this.adddstnumber.markAsUntouched();
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
      this.getErrorMessage(this.adddstnumber);
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
    return !this.adddstnumber.get(field).valid && this.adddstnumber.get(field).touched;
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

  getallusers() {
    this.userService.allusers().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.allusers = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'edit-dst-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './edit-dst-form.html',
})
export class EditDstNumberFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  editdstnumber: FormGroup;
  allips: any;
  allstaff: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditDstNumberFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);

    this.editdstnumber = this.fb.group({
      ip: ['', [Validators.required]],
      assign: [''],
      did_no: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      inusestatus: [false],
    });
  }

  ngOnInit(): void {
    this.getallips();
    this.getallstaff();
    this.editdstnumber.setValue({
      ip: this.data?.record?.ip ? this.data?.record?.ip?._id : 'null',
      assign: this.data?.record?.giventolevel1 ? this.data?.record?.giventolevel1 : 'null',
      did_no: this.data?.record?.did_no ? this.data?.record?.did_no : 'null',
      inusestatus: this.data?.record?.inusestatus ? true : false,
    });
  }

  getErrorMessage(form: FormGroup) {
    return form.get('did_no').hasError('required')
      ? 'validations.required'
      : form.get('did_no').hasError('min')
      ? 'validations.min'
      : form.get('did_no').hasError('max')
      ? 'validations.max'
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

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  isFieldValid(field: string) {
    return !this.editdstnumber.get(field).valid && this.editdstnumber.get(field).touched;
  }

  submitdstnumber() {
    console.log(this.editdstnumber.value);

    if (this.editdstnumber.valid) {
      this.userService.editdstnumber(this.data.record._id, this.editdstnumber.value).subscribe(
        (response: any) => {
          console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
          this.snackBar.open('IP Edited Successfully!', '', { duration: 2000 });
          this.editdstnumber.reset();
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
      this.getErrorMessage(this.editdstnumber);
    }
  }
}
