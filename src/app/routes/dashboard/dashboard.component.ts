import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { SettingsService } from '@core';
import { UserService } from 'app/user.service';
import { Subscription } from 'rxjs';

import { DashboardService } from './dashboard.srevice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .mat-raised-button {
        margin-right: 8px;
        margin-top: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  messages = this.dashboardSrv.getMessages();

  charts = this.dashboardSrv.getCharts();
  chart1 = null;
  chart2 = null;

  stats = this.dashboardSrv.getStats();
  //onestats = this.dashboardSrv.getStats();
  onestats: any;
  // onestats =
  //   {
  //     title: 'Total Calls',
  //     amount: '180,200',
  //     rsicon:'phone_paused',
  //     progress: {
  //       value: 50,
  //     },
  //     color: 'bg-indigo-500',
  //   }

  notifySubscription: Subscription;

  constructor(
    private ngZone: NgZone,
    private dashboardSrv: DashboardService,
    private settings: SettingsService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.getallcallcount();
    this.notifySubscription = this.settings.notify.subscribe(res => {});
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => this.initChart());
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1.destroy();
    }
    if (this.chart2) {
      this.chart2.destroy();
    }

    this.notifySubscription.unsubscribe();
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1.render();
    this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2.render();
  }

  getallcallcount() {
    this.userService.getallcallcounts().subscribe(
      (response: any) => {
        console.log(
          '%cstaff.component.ts line:238 response',
          'color: white; background-color: #007acc;',
          response
        );
        this.onestats = {
          title: 'Total Calls',
          amount: response.data,
          rsicon: 'phone_paused',
          progress: {
            value: 50,
          },
          color: 'bg-indigo-500',
        };
      },
      error => {
        console.log(error);
      }
    );
  }
}
