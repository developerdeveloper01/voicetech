import { UserService } from 'app/user.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  //table
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

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getallusers();
    this.columns = [
      { header: 'Avatar', field: 'userimg', type: 'image' },
      {
        header: 'Name',
        sortable: true,
        field: 'firstname',
        formatter: (data: any) => `${data.firstname} ${data.lastname}`,
        width: '150px',
      },
      { header: 'Mobile', sortable: true, field: 'mobile' },
      { header: 'Email', sortable: true, field: 'email' },
      { header: 'Organization', sortable: true, field: 'organization_name', hide: true },
      { header: 'Company', sortable: true, field: 'companyName' },
      { header: 'DID Number', sortable: true, field: 'alloted_did.did_no' },
      { header: 'Created Date', sortable: true, field: 'createdAt' },
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
  }

  changeSort(e) {
    console.log(e);
  }

  changeSelect(e) {
    console.log(e);
  }

  getallusers() {
    this.userService.allusers().subscribe(
      (response: any) => {
        console.log('%cusers.component.ts line:54 response', 'color: #26bfa5;', response);
        this.list = response.data;
        this.total = response.data.length;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error => {
        console.log(
          '%cerror users.component.ts line:62 ',
          'color: red; display: block; width: 100%;',
          error
        );
      }
    );
  }

  edit(data) {
    console.log(data);
  }

  delete(data) {
    console.log(data);
  }
}
