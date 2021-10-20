import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn } from '@ng-matero/extensions';

import { TablesDataService } from '../prepaid-plan/data.service';
// import { TablesKitchenSinkEditComponent } from '../prepaid-plan/edit/edit.component';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'app/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-prepaid-plan',
  templateUrl: './prepaid-plan.component.html',
  styleUrls: ['./prepaid-plan.component.scss'],
  providers: [TablesDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrepaidPlanComponent implements OnInit {
  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('table_kitchen_sink.position'),
      field: 'position',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('table_kitchen_sink.name'),
      field: 'name',
      sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('table_kitchen_sink.weight'),
      field: 'weight',
      minWidth: 100,
    },
    {
      header: this.translate.stream('table_kitchen_sink.symbol'),
      field: 'symbol',
      minWidth: 100,
    },
    {
      header: this.translate.stream('table_kitchen_sink.gender'),
      field: 'gender',
      minWidth: 100,
    },
    {
      header: this.translate.stream('table_kitchen_sink.mobile'),
      field: 'mobile',
      hide: true,
      minWidth: 120,
    },
    {
      header: this.translate.stream('table_kitchen_sink.tele'),
      field: 'tele',
      minWidth: 120,
      width: '120px',
    },
    {
      header: this.translate.stream('table_kitchen_sink.birthday'),
      field: 'birthday',
      minWidth: 180,
    },
    {
      header: this.translate.stream('table_kitchen_sink.city'),
      field: 'city',
      minWidth: 120,
    },
    {
      header: this.translate.stream('table_kitchen_sink.address'),
      field: 'address',
      minWidth: 180,
      width: '200px',
    },
    {
      header: this.translate.stream('table_kitchen_sink.company'),
      field: 'company',
      minWidth: 120,
    },
    {
      header: this.translate.stream('table_kitchen_sink.website'),
      field: 'website',
      minWidth: 180,
    },
    {
      header: this.translate.stream('table_kitchen_sink.email'),
      field: 'email',
      minWidth: 180,
    },
    {
      header: this.translate.stream('table_kitchen_sink.operation'),
      field: 'operation',
      minWidth: 160,
      width: '160px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'add',
          tooltip: this.translate.stream('add'),
        },
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('table_kitchen_sink.edit'),
          // click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('table_kitchen_sink.delete'),
          tooltip: this.translate.stream('table_kitchen_sink.delete'),
          pop: true,
          popTitle: this.translate.stream('table_kitchen_sink.confirm_delete'),
          popCloseText: this.translate.stream('table_kitchen_sink.close'),
          popOkText: this.translate.stream('table_kitchen_sink.ok'),
          click: record => this.delete(record),
        },
      ],
    },
  ];
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
    private translate: TranslateService,
    private dataSrv: TablesDataService,
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    private cdr: ChangeDetectorRef,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.list = this.dataSrv.getData();
    this.getallplans();
  }

  // edit(value: any) {
  //   const dialogRef = this.dialog.originalOpen(TablesKitchenSinkEditComponent, {
  //     width: '600px',
  //     data: { record: value },
  //   });

  //   dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  // }

  delete(value: any) {
    this.dialogx.alert(`You have deleted ${value.position}!`);
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  enableRowExpandable() {
    this.columns[0].showExpand = this.expandable;
  }

  updateCell() {
    this.list = this.list.map(item => {
      item.weight = Math.round(Math.random() * 1000) / 100;
      return item;
    });
  }

  updateList() {
    this.list = this.list.splice(-1).concat(this.list);
  }

  openAddPrepaid() {
    let adddailogRef = this.dialog.open(AddPrepaidFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallplans();
    });
  }

  getallplans() {
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
