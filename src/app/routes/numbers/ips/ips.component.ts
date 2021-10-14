import { Component, OnInit,ChangeDetectionStrategy, ViewChild } from '@angular/core';
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



@Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class IpsComponent implements OnInit {

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
  columnResizable = true;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private dateAdapter: DateAdapter<any>,
    public dialog: MtxDialog,

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


  displayedColumns: string[] = [
    'ipnumber',
    'title',
    'activestatus',
    'actions',
  ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getallips()
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  edit(value: any) {
    const dialogRef = this.dialog.originalOpen(TablesKitchenSinkEditComponent, {
      width: '900px',
      data: { record: value },
    });
    const onOk = () => {
      this.dialog.alert('Closed');
    };
    // const dialogRef = this.dialog.alert('Clicked alert', 'this is description');
    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

  delete(value: any) {
    this.dialog.alert(`You have deleted ${value.position}!`);
  }


  getallips() {
    this.userService.getallips().subscribe(
      (response: any) => {
        console.log('%crole.component.ts line:311 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.list = response.data;
      },
      error => {
        console.log('%cerror role.component.ts line:318 ', 'color: red; display: block; width: 100%;', error);
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
        console.log('%cerror ips.component.ts line:254 ', 'color: red; display: block; width: 100%;', error);
      }
    );
  }
}
