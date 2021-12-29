import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MtxDialog } from '@ng-matero/extensions';
import { TablesKitchenSinkEditComponent } from 'app/routes/tables/kitchen-sink/edit/edit.component';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss'],
})
export class NumberListComponent implements OnInit, AfterViewInit {
  showdeletebutton: any;

  columns = [];
  list = [];
  total = 0;
  isLoading: Boolean = true;
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
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getallnumbers();
    this.columns = [
      { header: 'DID Number', sortable: true, field: 'did_no' },
      { header: 'IP', sortable: true, field: 'ip.ipnumber' },
      {
        header: 'Alloted to',
        field: 'giventolevel1.firstname',
      },
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

  // openEditDstNumber(value) {
  //   let editdailogRef = this.dialog.open(EditDstNumberFormComponent, {
  //     width: '500px',
  //     data: { record: value },
  //   });

  //   editdailogRef.afterClosed().subscribe(() => {
  //     console.log('The edit dailog closed');
  //     this.getallnumbers();
  //   });
  // }

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

  // openAddDstNumber() {
  //   let adddailogRef = this.dialog.open(AddDstNumberFormComponent, { width: '500px' });

  //   adddailogRef.afterClosed().subscribe(() => {
  //     this.getallnumbers();
  //   });
  // }

  changeSelect(e: any) {
    console.log(e);
  }

  changerowSelect(e: any) {
    console.log(e);
    e.map(a => console.log(a._id));
    this.showdeletebutton = true;
  }

  changecellSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  getallnumbers() {
    this.userService.mydstnumbers().subscribe(
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
