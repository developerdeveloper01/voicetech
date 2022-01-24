import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  //Table
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

  constructor() {}

  ngOnInit(): void {}

  changeSort(e) {
    console.log(e);
  }

  changerowSelect(e) {
    console.log(e);
  }

  changecellSelect(e) {
    console.log(e);
  }
}
