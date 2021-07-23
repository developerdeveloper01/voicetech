import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MtxGridColumn } from '@ng-matero/extensions';
import { TablesRemoteDataService } from '../agent-table/remote-data.service';

@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TablesRemoteDataService],
})
export class AgentTableComponent implements OnInit {

  columns: MtxGridColumn[] = [
    {
      header: 'AGENT',
      field: 'agent',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { header: 'ID', field: 'id' },
    { header: 'Q-LEVEL	', field: 'q-level', },
    { header: 'ANS-CALL	', field: 'ans-call' },
    { header: 'ABE-CALL	', field: 'abe-call', type: 'number' },
    { header: 'TOT-TT	', field: 'tot-tt', type: 'number' },
    { header: 'AVG-TT	', field: 'avg-tt',  },
    { header: 'STATUS', field: 'status',  },
    { header: 'STATE', field: 'state',  },
    { header: 'TIMER', field: 'timer',  },
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


