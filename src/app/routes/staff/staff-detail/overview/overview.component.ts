import { AuthService } from './../../../../core/authentication/auth.service';
import { UserService } from 'app/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  id: any;
  userDetail: any;
  constructor(
    private auth: AuthService,
    public userService: UserService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.params['id'];
    this.id = localStorage.getItem('id');
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
