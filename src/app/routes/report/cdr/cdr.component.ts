import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'app/user.service';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDatepickerActions } from '@angular/material/datepicker';

@Component({
  selector: 'app-cdr',
  templateUrl: './cdr.component.html',
  styleUrls: ['./cdr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrComponent implements OnInit, AfterViewInit, OnDestroy {
  notinusestartingDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
  notinuseendDate = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);

  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  searchform: FormGroup;

  columns: MtxGridColumn[] = [
    { header: 'ID', sortable: true, field: 'id' },
    { header: 'Caller ID', sortable: true, field: 'caller_id_name' },
    { header: 'Destination Number', sortable: true, field: 'destination_number' },
    { header: 'Context', sortable: true, field: 'context' },
    { header: 'Start Call', sortable: true, field: 'start_stamp' },
    { header: 'Answer Stamp', sortable: true, field: 'answer_stamp' },
    { header: 'End Call', sortable: true, field: 'end_stamp' },
    { header: 'Duration', sortable: true, field: 'duration' },
    { header: 'Bill', sortable: true, field: 'billsec' },
    { header: 'Hangup Cause', sortable: true, field: 'hangup_cause' },
    { header: 'Call Unique ID', sortable: true, field: 'uuid' },
    { header: 'Date', sortable: true, field: 'created_time' },
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
  rowStriped = true;
  showPaginator = true;
  expandable = true;
  columnResizable = false;
  columnMenuButtonType = 'raised';

  //other
  alldstnumbers: any;
  myControl = new FormControl();

  options: string[] = ['1256', '4894', '4642', '8462', '8521'];
  filteredOptions: Observable<string[]>;

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.getallcdrreport();
    this.searchform = this.fb.group({
      startdate: [new Date(Date.now())],
      enddate: [Date.now()],
      searchinput: [''],
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
    let editdailogRef = this.dialog.open(EditCdrFileFormComponent, {
      width: '500px',
      data: { record: value },
    });

    editdailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallcdrreport();
    });
  }

  delete(value: any) {
    this.userService.deletenumber(value._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallcdrreport();
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

  openAddDstNumber() {
    let adddailogRef = this.dialog.open(AddCdrFileFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallcdrreport();
    });
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  getallcdrreport() {
    var num = 1;
    this.userService.allcdrreport().subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.list = response.data;
        this.total = response.data.length;
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

  ngOnDestroy() {
    console.log('component destroyed');
  }

  submitsearch() {
    console.log(this.searchform.value);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
}

@Component({
  selector: 'add-cdr-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-cdr-form.html',
})
export class AddCdrFileFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  adddstnumber: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.adddstnumber = this.fb.group({
      ip: ['', [Validators.required]],
      dstnumber: [
        '',
        [Validators.required, Validators.min(1000000000), Validators.max(9999999999)],
      ],
      inusestatus: [false],
    });
  }

  ngOnInit(): void {
    this.getallips();
  }

  getErrorMessage(form: FormGroup) {
    return form.get('dstnumber').hasError('required')
      ? 'validations.required'
      : form.get('dstnumber').hasError('min')
      ? 'validations.min'
      : form.get('dstnumber').hasError('max')
      ? 'validations.max'
      : '';
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  submitdstnumber() {
    if (this.adddstnumber.valid) {
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
}

@Component({
  selector: 'edit-cdr-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './edit-cdr-form.html',
})
export class EditCdrFileFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  editdstnumber: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditCdrFileFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);

    this.editdstnumber = this.fb.group({
      ip: ['', [Validators.required]],
      dstnumber: [
        '',
        [Validators.required, Validators.min(1000000000), Validators.max(9999999999)],
      ],
      inusestatus: [false],
    });
  }

  ngOnInit(): void {
    this.getallips();
    this.editdstnumber.setValue({
      ip: this.data?.record?.ip ? this.data?.record?.ip?._id : 'null',
      dstnumber: this.data?.record?.dstnumber ? this.data?.record?.dstnumber : 'null',
      inusestatus: this.data?.record?.inusestatus ? true : false,
    });
  }

  getErrorMessage(form: FormGroup) {
    return form.get('dstnumber').hasError('required')
      ? 'validations.required'
      : form.get('dstnumber').hasError('min')
      ? 'validations.min'
      : form.get('dstnumber').hasError('max')
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
