import { ActivatedRoute } from '@angular/router';
import { User } from './../../../core/authentication/interface';
import { AuthService } from './../../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss'],
})
export class StaffDetailComponent implements OnInit {
  id: any;
  user: User;
  userDetail: any;
  constructor(
    private auth: AuthService,
    public userService: UserService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.auth.user().subscribe(user => (this.user = user));
    console.log(this.route.snapshot);
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    localStorage.setItem('id', this.id);
    this.viewonestaffdetail(this.id);
  }

  viewonestaffdetail(id) {
    this.userService.viewonestaff(id).subscribe(
      (response: any) => {
        console.log(response);
        this.userDetail = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
