import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MtxGridColumn } from '@ng-matero/extensions';
import { TablesRemoteDataService } from '../live-calls/remote-data.service';

@Component({
  selector: 'app-live-calls',
  templateUrl: './live-calls.component.html',
  styleUrls: ['./live-calls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class LiveCallsComponent implements OnInit {

  columns: MtxGridColumn[] = [
    {
      header: 'INDEX',
      field: 'index',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { header: 'NAME', field: 'name' },
    { header: 'FROM', field: 'from', },
    { header: 'IP', field: 'ip' },
    { header: 'TO', field: 'to', type: 'number' },
    { header: 'CREATED TIME', field: 'created time', type: 'number' },
    { header: 'STATUS', field: 'status',  },
    { header: 'TALK TIME', field: 'talk time', type: 'number' },
   ];
  list = [];
  total = 0;
  isLoading = true;

  query = {
    q: 'user:nzbin',
    sort: 'stars',
    order: 'desc',
    page: 0,
    per_page: 10,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  constructor(private remoteSrv: TablesRemoteDataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;

    this.remoteSrv.getData(this.params).subscribe(
      res => {
        this.list = res.items;
        this.total = res.total_count;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    );
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.getData();
  }

  search() {
    this.query.page = 0;
    this.getData();
  }
}

