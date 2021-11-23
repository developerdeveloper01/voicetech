import { MatCheckbox } from '@angular/material/checkbox';
import { UserService } from 'app/user.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubordinatesComponent implements OnInit {
  //table
  columns = [];
  list = [];
  total = 0;
  isLoading: Boolean;
  multiSelectable = true;
  rowSelectable = true;
  hideRowSelectionCheckbox = false;
  showToolbar = true;
  columnHideable = true;
  columnMovable = true;
  rowHover = true;
  rowStriped = true;
  showPaginator = true;
  expandable = true;
  columnResizable = false;

  constructor(
    public dialog: MatDialog,
    public dialogx: MtxDialog,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  openSubordinate() {
    let adddailogRef = this.dialog.open(AddSubordinateFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      // this.getallusers();
      console.log('Dailog Closed');
    });
  }
}

@Component({
  selector: 'add-user-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: 'add-subordinates-form.html',
})
export class AddSubordinateFormComponent implements OnInit {
  adduserform: FormGroup;
  editmode: Boolean = false;
  allroles: any;
  falseValue = 'false';
  trueValue = 'true';

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddSubordinateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.adduserform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      approvedstatus: [false],
    });
  }
  ngOnInit(): void {
    this.getallroles();
  }

  submituserform() {
    console.log(this.adduserform.value);
  }

  getallroles() {
    this.userService.getallroles().subscribe(
      (response: any) => {
        console.log(response);

        this.allroles = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
    console.log(checkbox.value);
  }
}
