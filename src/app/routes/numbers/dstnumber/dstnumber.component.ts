import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
  selector: 'app-dstnumber',
  templateUrl: './dstnumber.component.html',
  styleUrls: ['./dstnumber.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DstnumberComponent implements OnInit, AfterViewInit, OnDestroy {
  columns: MtxGridColumn[] = [
    { header: 'DST Number', sortable: true, field: 'dstnumber' },
    { header: 'IP', sortable: true, field: 'ip.ipnumber' },
    {
      header: 'Active Status',
      field: 'inusestatus',
      type: 'tag',
      sortable: true,
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
  isLoading = false;
  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = false;
  showPaginator = true;
  expandable = false;
  columnResizable = false;

  alldstnumbers: any;

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');
    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  openEditDstNumber(value) {
    let editdailogRef = this.dialog.open(EditDstNumberFormComponent, {
      width: '320px',
      data: { record: value },
    });

    editdailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallnumbers();
    });
  }

  delete(value: any) {
    this.dialogx.alert(`You have deleted ${value.position}!`);
  }

  openAddDstNumber() {
    this.dialog.open(AddDstNumberFormComponent, { width: '320px' });
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
    console.log('view changed');
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }
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

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.adddstnumber = this.fb.group({
      ip: ['', [Validators.required]],
      dstnumber: ['', [Validators.required]],
      inusestatus: [false],
    });
  }

  ngOnInit(): void {
    this.getallips();
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
  }

  submitdstnumber() {
    console.log(this.adddstnumber.value);
    this.userService.adddstnumber(this.adddstnumber.value).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.snackBar.open('DST Number Added Successfully!', '', { duration: 2000 });
        this.adddstnumber.reset();
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
      dstnumber: ['', [Validators.required]],
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

  submitdstnumber() {
    console.log(this.editdstnumber.value);
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
  }
}
