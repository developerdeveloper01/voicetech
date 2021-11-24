import { UserService } from 'app/user.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-call',
  templateUrl: './live-call.component.html',
  styleUrls: ['./live-call.component.scss']
})
export class LiveCallComponent implements OnInit {
  columns = [];
  list = [];
  total = 0;
  isLoading = true;
  allroles: any;
  filteredData: any;

  multiSelectable = false;
  rowSelectable = false;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = true;
  showPaginator = true;
  expandable = false;
  columnResizable = false;

  constructor(
    private cdr: ChangeDetectorRef,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.alllivecalls();

    this.columns = [
      {
        header: 'UUID',
        field: 'uuid',
      },
      { header: 'DID', sortable: true, field: 'initial_cid_num' },
      { header: 'Number', sortable: true, field: 'initial_dest' },
      {
        header: 'Direction',
        field: 'direction', sortable: true,
        formatter: (data: any) =>
          `<span class="admin-dy-class">${data?.direction}</span>`,
      },
      {
        header: 'Call Status',
        field: 'callstate', sortable: true,
        formatter: (data: any) =>
          `<span class="label">${data?.callstate}</span>`,
      },
      {
        header: 'Call UUID',
        field: 'call_uuid', sortable: true,
      },
      {
        header: 'Actions',
        field: 'action',
        minWidth: 60,
        width: '60px',
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
        ],
      },
    ];
  }



  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  //getallivecalls
  async alllivecalls() {
    await this.userService.getallivecalls().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.list = response.message;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error => {
        console.log(error);
      }
    );
  }

  view(data){
    console.log(data)
  }
}
