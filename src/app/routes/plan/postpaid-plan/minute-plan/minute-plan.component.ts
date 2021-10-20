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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'app/user.service';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
@Component({
  selector: 'app-minute-plan',
  templateUrl: './minute-plan.component.html',
  styleUrls: ['./minute-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinutePlanComponent implements OnInit {
  columns: MtxGridColumn[] = [
    { header: 'Validity Plan', sortable: true, field: 'validityplan' },
    { header: 'Price', sortable: true, field: 'price' },
    {
      header: 'Active Status',
      field: 'inusestatus',
      type: 'tag',
      sortable: true,
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
  columnMenuButtonType = 'raised';

  alldstnumbers: any;

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getallnumbers();
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
    let editdailogRef = this.dialog.open(EditMinutePlanFormComponent, {
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

  openAddDstNumber() {
    let adddailogRef = this.dialog.open(AddMinutePlanFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallnumbers();
    });
  }

  changeSelect(e: any) {
    console.log(e);
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
    this.isLoading = false;
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
}

@Component({
  selector: 'add-minute-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-minute-form.html',
})
export class AddMinutePlanFormComponent implements OnInit {
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
  selector: 'edit-minute-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './edit-minute-form.html',
})
export class EditMinutePlanFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  editdstnumber: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditMinutePlanFormComponent>,
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
