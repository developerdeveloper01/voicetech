import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MtxGridColumn } from '@ng-matero/extensions';
import { TablesRemoteDataService } from '../user-group/remote-data.service';
@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class UserGroupComponent implements OnInit {

  columns: MtxGridColumn[] = [
    {
      header: 'NAME',
      field: 'name',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { header: 'G.EXPRESSION', field: 'G.Expression' },
    { header: 'TRUNK IN-ID', field: 'Trunk In-ID', },
    { header: 'Trunk OUT-ID', field: 'Trunk Out-ID' },
    { header: 'INCOMING', field: 'incoming', type: 'number' },
    { header: 'OUTGOING', field: 'out going',  },
    { header: 'ACTION', field: 'action',  },
    
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

