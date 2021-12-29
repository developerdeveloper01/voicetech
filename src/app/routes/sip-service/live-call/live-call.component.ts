import { Observable } from 'rxjs';
import { UserService } from 'app/user.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-live-call',
  templateUrl: './live-call.component.html',
  styleUrls: ['./live-call.component.scss'],
})
export class LiveCallComponent implements OnInit {
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

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
    public dialog: MatDialog
  ) {}

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
        field: 'direction',
        sortable: true,
        formatter: (data: any) => `<span class="admin-dy-class">${data?.direction}</span>`,
      },
      {
        header: 'Call Status',
        field: 'callstate',
        sortable: true,
        formatter: (data: any) => `<span class="label">${data?.callstate}</span>`,
      },
      {
        header: 'Call UUID',
        field: 'call_uuid',
        sortable: true,
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
            color: 'primary',
            icon: 'visibility',
            tooltip: 'view',
            click: record => this.view(record),
          },
          {
            type: 'icon',
            color: 'primary',
            icon: 'play_circle_filled',
            tooltip: 'play',
            click: record => this.playrecording(record),
          },
        ],
      },
    ];
  }

  reloadcalls() {
    this.alllivecalls();
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  //getallivecalls
  alllivecalls() {
    this.userService.getallivecalls().subscribe(
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

  playrecording(record) {
    console.log(record);
    let adddailogRef = this.dialog.open(PlayRecordingComponent, { width: '800px' });

    adddailogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }

  getallcalls() {
    // console.log("req data");
    //this.userService.getallivecalls().subscribe((data)=>data)
  }

  view(data) {
    console.log(data);
  }
}

@Component({
  selector: 'play-recording',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './play-recording.html',
})
export class PlayRecordingComponent implements OnInit {
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [100, 200, 500];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = true;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Welcome to Tel Internet',
      link: 'http://103.8.43.14/onyx/assets/voicefiles/voicetechnetmax.wav',
      artist: 'Voicetech admin',
      duration: 12,
    },
    {
      title: 'Audio test',
      link: 'https://www.computerhope.com/jargon/m/example.mp3',
      artist: 'Voicetech admin',
      duration: 4,
    },
    {
      title: 'Dailed Number Does not Exist',
      link: 'http://103.8.43.14/onyx/assets/voicefiles/143.wav',
      artist: 'Voicetech admin',
      duration: 4,
    },
    {
      title: 'CDN Music',
      link: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      artist: 'Voicetech admin',
      duration: 200,
    },
  ];
  constructor() {}

  onEnded(e) {
    console.log(e);
  }

  ngOnInit(): void {}
}
