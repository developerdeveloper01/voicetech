import { UserService } from 'app/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id:any
  userdetail:any
  constructor(public userService: UserService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getuserdetail(this.id)
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
}
