import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { SettingsService } from '@core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  host: {
    class: 'matero-header',
  },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  //ipserver:String;
  @Input() showToggle = true;
  @Input() showBranding = false;
  @Input() ipserver = this.settings.getOptions().ipserver;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor(private settings: SettingsService) {}

  ngOnInit() {
    this.getsettingoptions();
  }

  toggleFullscreen() {
    if (this.screenfull.isEnabled) {
      this.screenfull.toggle();
    }
  }

  getsettingoptions() {
    this.ipserver = this.settings.getOptions().ipserver;
  }
}
