import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../user.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
  id:any
  userdetail:any
  panelOpenState = false;

  myControl = new FormControl();

  options: string[] = [];
  filteredOptions: Observable<string[]>;


  edituserform: FormGroup;
  allotnumber: FormGroup;

  step:any;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [10,20,50];
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
    duration: 12
  },
  {
    title: 'Audio test',
    link: 'https://www.computerhope.com/jargon/m/example.mp3',
    artist: 'Voicetech admin',
    duration: 4
  },
  {
    title: 'Dailed Number Does not Exist',
    link: 'http://103.8.43.14/onyx/assets/voicefiles/143.wav',
    artist: 'Voicetech admin',
    duration: 4
  },
  {
    title: 'CDN Music',
    link: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    artist: 'Voicetech admin',
    duration: 200
  },
];


  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    public route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );


    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getallnumbers();
    this.getuserdetail(this.id)
    this.edituserform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      //password: ['', [Validators.required]],
      organization_name: ['', [Validators.required]]
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  getuserdetail(id) {
    this.userService.userdetail(id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.userdetail = response.data
      },
      error => {
        console.log(error);
      }
    );
  }

  getErrorMessage(form: FormGroup) {
    return form.get('firstname').hasError('required')
      ? 'validations.required'
      : form.get('lastname').hasError('required')
      ? 'validations.required'
      : form.get('email').hasError('required')
      ? 'validations.required'
      : '';
  }

  openedituser(){
    this.edituserform.setValue({
      firstname: this.userdetail.firstname ? this.userdetail.firstname : 'null',
      lastname: this.userdetail.lastname ? this.userdetail.lastname : 'null',
      email: this.userdetail.email ? this.userdetail.email : 'null',
      mobile: this.userdetail.mobile ? this.userdetail.mobile : 'null',
      // password: this.userdetail.password ? this.userdetail.password : 'null',
      organization_name: this.userdetail.organization_name ? this.userdetail.organization_name : 'null',
    });
  }

  submituserform(){
    console.log(this.edituserform.value);
    if (this.edituserform.valid) {
      console.log(this.edituserform.value);
      this.userService.edituser(this.id,this.edituserform.value).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open('User Edited Successfully!', '', { duration: 2000 });
          this.edituserform.reset();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.getErrorMessage(this.edituserform);
    }
  }

  cancelformaccordian(){
    this.panelOpenState = false;
    console.log(this.panelOpenState);
    //this.edituserform.reset()
  }

  isFieldValid(field: string) {
    return !this.edituserform.get(field).valid && this.edituserform.get(field).touched;
  }

  onEnded(e){
    console.log(e);
  }

  getallnumbers() {
    this.userService.getalldstnumbers().subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        const object = response.data;
        const newarray = []
        for (const did_no in object) {
          if (Object.prototype.hasOwnProperty.call(object, did_no)) {
            const element = object[did_no];
            newarray.push(element.did_no)
          }
        }
        this.options=newarray
        this.cdr.detectChanges();
      },
      error => {
        console.log(
          '%cerror ips.component.ts line:254 ',
          'color: red; display: block; width: 100%;',
          error
        );
      }
    );
  }

  submitnumberform(){
    console.log(this.allotnumber.value);
  }
}
