import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/user.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats: any;
  chatrooms: any;
  chatdetail: any;
  sendmsg: FormGroup;
  activeid: any;
  interval: any;
  list:any

  abcd = 'http://emilcarlsson.se/assets/mikeross.png';
  defaulturl = '../../../assets/images/support.png';
  constructor(
    public userService: UserService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.sendmsg = this.fb.group({
      userid: [''],
      msg: ['', [Validators.required]],
      msgbysupport: [true],
    });
    this.interval = interval(2000);
  }

  ngOnInit(): void {
    this.getallchatrooms();
    this.getallusers();
  }

  getallchatwithoneuser(id: any) {
    this.userService.getchatwithuser(id).subscribe(
      (response: any) => {
        console.log(response);
        this.chats = response.data;
        this.chatdetail = this.chats[0]?.userid;
        this.markasread(this.chats[0]?.userid._id);
        this.sendmsg.setValue({
          userid: this.chats[0]?.userid?._id,
          msg: '',
          msgbysupport: true,
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  getallchatrooms() {
    this.userService.getchatrooms().subscribe(
      (response: any) => {
        console.log(response);
        this.chatrooms = response.data;
        console.log(response.data[0].userid?._id);
        this.getallchatwithoneuser(response.data[0].userid?._id);
      },
      error => {
        console.log(error);
      }
    );
  }

  markasread(id) {
    this.userService.markasread(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  contact(id) {
    console.log(id);
    //this.getallchatrooms()
    this.getallchatwithoneuser(id);
    this.sendmsg.setValue({
      userid: id,
      msg: '',
      msgbysupport: true,
    });
    this.activeid = id;
  }

  submitchat() {
    console.log(this.sendmsg.value);
    if (this.sendmsg.valid) {
      this.userService.sendchat(this.sendmsg.value).subscribe(
        (response: any) => {
          console.log(response);
          this.getallchatwithoneuser(this.sendmsg.value.userid);
          this.sendmsg.reset();
          this.sendmsg.markAsUntouched();
          //this.getallchatrooms()
          //this.cdr.detectChanges();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  deleteonechat(id) {
    console.log(id);
    this.userService.deleteonechat(id).subscribe(
      (response: any) => {
        console.log(response);
        this.getallchatwithoneuser(this.activeid);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteall(id) {
    console.log(id);
    this.userService.deleteallchat(id).subscribe(
      (response: any) => {
        console.log(response);
        this.getallchatrooms();
      },
      error => {
        console.log(error);
      }
    );
  }

  foods = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Lemon' },
    { id: 3, name: 'Lime' },
    { id: 4, name: 'Orange', disabled: true },
    { id: 5, name: 'Strawberry' },
  ];

  food: number | number[] = 2;

  multiple = false;
  disabled = false;
  required = true;

  onMultiSelectChange() {
    this.food = this.multiple ? [2] : 2;
  }


  getallusers() {
    this.userService.allusers().subscribe(
      (response: any) => {
        console.log(response);
        this.list = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // clearchat(id) {
  //   console.log(id);
  //   this.userService.clearchat(id).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.getallchatrooms();
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
