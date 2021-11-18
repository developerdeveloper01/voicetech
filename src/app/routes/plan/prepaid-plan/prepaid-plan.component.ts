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
  selector: 'app-prepaid-plan',
  templateUrl: './prepaid-plan.component.html',
  styleUrls: ['./prepaid-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrepaidPlanComponent implements OnInit, AfterViewInit, OnDestroy {
  columns: MtxGridColumn[] = [
    { header: 'Plan Title', sortable: true, field: 'plantitle' },
    { header: 'Price (Rs)', sortable: true, field: 'planprice' },
    { header: 'Validity (Days)', sortable: true, field: 'validityday' },
    { header: 'Balance (Minutes)', sortable: true, field: 'minute_balance' },
    { header: 'Description', sortable: true, field: 'desc' },
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
  filteredData: any;

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

  view(value: any) {
    console.log(value);
  }

  edit(data: any) {
    console.log(data);
    let adddailogRef = this.dialog.open(AddPrepaidplanOneFormComponent, {
      width: '500px',
      data: { record: data },
    });

    adddailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallnumbers();
    });
  }

  openEditDstNumber(value) {
    let editdailogRef = this.dialog.open(EditPrepaidplanOneFormComponent, {
      width: '500px',
      data: { record: value },
    });

    editdailogRef.afterClosed().subscribe(() => {
      console.log('The edit dailog closed');
      this.getallnumbers();
    });
  }

  delete(value: any) {
    this.userService.deleteplan(value._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallnumbers();
        this.cdr.detectChanges();
        this.dialogx.alert(`You have deleted ${value.plantitle}!`);
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

  openAddPlan() {
    let adddailogRef = this.dialog.open(AddPrepaidplanOneFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.cdr.detectChanges();
      this.getallnumbers();
    });
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  searchData(searchValue: any) {
    if(searchValue){
    this.filteredData = this.list.filter((item: any) => {
        return item.plantitle.toLowerCase().includes(searchValue.toLowerCase()) || item.desc.toLowerCase().includes(searchValue.toLowerCase());
    });}
    else{
      this.filteredData = null;
      this.getallnumbers();
      this.getallnumbers();
    }
  }

  getallnumbers() {
    this.userService.getallplans().subscribe(
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
  selector: 'add-prepaidplan-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-prepaidplan-form.html',
})
export class AddPrepaidplanOneFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';
  editmode: Boolean = false;
  addplan: FormGroup;
  allips: any;
  id: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddPrepaidplanOneFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addplan = this.fb.group({
      plantitle: ['', [Validators.required]],
      planprice: ['', [Validators.required]],
      validityday: ['', [Validators.required]],
      minute_balance: ['', [Validators.required]],
      desc: ['', [Validators.required]],
    });

    if (data) {
      console.log(data);
      this.editmode = true;
      this.id = this.data?.record?._id;
      this.addplan.setValue({
        plantitle: this.data?.record?.plantitle ? this.data?.record?.plantitle : 'null',
        planprice: this.data?.record?.planprice ? this.data?.record?.planprice : 'null',
        validityday: this.data?.record?.validityday ? this.data?.record?.validityday : 'null',
        minute_balance: this.data?.record?.minute_balance
          ? this.data?.record?.minute_balance
          : 'null',
        desc: this.data?.record?.desc ? this.data?.record?.desc : 'null',
      });
    }
  }

  ngOnInit(): void {}

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
    if (this.editmode) {
      console.log(this.addplan.value);
      this.userService.editplan(this.id, this.addplan.value).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open('Plan Edited Successfully!', '', { duration: 2000 });
          this.addplan.reset();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      if (this.addplan.valid) {
        this.userService.addplan(this.addplan.value).subscribe(
          (response: any) => {
            console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
            this.snackBar.open('Plan Added Successfully!', '', { duration: 2000 });
            this.addplan.reset();
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
        this.getErrorMessage(this.addplan);
      }
    }
  }

  isFieldValid(field: string) {
    return !this.addplan.get(field).valid && this.addplan.get(field).touched;
  }
}

@Component({
  selector: 'edit-prepaidplan-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './edit-prepaidplan-form.html',
})
export class EditPrepaidplanOneFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  editdstnumber: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditPrepaidplanOneFormComponent>,
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

  openAddPrepaid() {
    // let adddailogRef = this.dialog.open(AddPrepaidFormComponent, { width: '500px' });
    // adddailogRef.afterClosed().subscribe(() => {
    //   this.getallplans();
    // });
  }

  getallplans() {
    this.userService.getallplans().subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
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
  selector: 'add-prepaid-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './add-prepaid-form.html',
})
export class AddPrepaidFormComponent implements OnInit {
  falseValue = 'false';
  trueValue = 'true';

  addprepaidplan: FormGroup;
  allips: any;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.addprepaidplan = this.fb.group({
      plantitle: ['', [Validators.required]],
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

  submitprepaid() {
    if (this.addprepaidplan.valid) {
      this.userService.addplan(this.addprepaidplan.value).subscribe(
        (response: any) => {
          console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
          this.snackBar.open('Plan Added Successfully!', '', { duration: 2000 });
          this.addprepaidplan.reset();
          //this.addprepaidplan.markAsUntouched();
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
      this.getErrorMessage(this.addprepaidplan);
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
    return !this.addprepaidplan.get(field).valid && this.addprepaidplan.get(field).touched;
  }
}
