import { UserService } from 'app/user.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentComponent implements OnInit {
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

  ngOnInit(): void {}

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }
}
