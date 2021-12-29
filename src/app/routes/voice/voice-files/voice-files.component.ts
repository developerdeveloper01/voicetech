import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-voice-files',
  templateUrl: './voice-files.component.html',
  styleUrls: ['./voice-files.component.scss'],
})
export class VoiceFilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [100, 200, 500];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Welcome to Tel Internet',
      link: 'http://103.8.43.14/onyx/assets/voicefiles/voicetechnetmax.wav',
      artist: 'Voicetech admin',
      duration: 12,
    },
    {
      title: 'Aero',
      link: 'http://103.8.43.14/onyx/assets/voicefiles/86.wav',
      artist: 'Voicetech admin',
      duration: 12,
    },
    {
      title: 'Almani2',
      link: 'http://103.8.43.14/onyx/assets/voicefiles/almani1.wav',
      artist: 'Voicetech admin',
      duration: 2,
    },
    {
      title: 'Almani',
      link: 'http://103.8.43.14/onyx/assets/voicefiles/almani.wav',
      artist: 'Voicetech admin',
      duration: 2,
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

  onEnded(e) {
    console.log(e);
  }
}
