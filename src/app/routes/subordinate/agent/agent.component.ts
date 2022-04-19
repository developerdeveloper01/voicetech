import { MatSnackBar } from '@angular/material/snack-bar';
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
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentComponent implements OnInit {
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

  ngOnInit(): void {
    this.getallagent();

    this.columns = [
      {
        header: 'Avatar',
        field: 'staffimg',
        type: 'image',
      },
      {
        header: 'Name',
        field: 'name',
        formatter: (data: any) => `${data.firstname} ${data.lastname} `,
      },
      { header: 'Email', sortable: true, field: 'email' },
      { header: 'Mobile', sortable: true, field: 'mobile' },

      {
        header: 'Approved',
        field: 'approvedstatus',
        type: 'tag',
        tag: {
          true: { text: 'Yes', color: 'red-100' },
          false: { text: 'No', color: 'green-100' },
        },
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
            icon: 'edit',
            tooltip: 'edit',
            click: record => this.edit(record),
          },
          {
            color: 'warn',
            icon: 'delete',
            text: 'delete',
            tooltip: 'delete',
            pop: true,
            popTitle: 'Confirm Delete',
            popCloseText: 'Cancel',
            popOkText: 'Delete',
            click: record => this.delete(record),
          },
        ],
      },
    ];
  }

  edit(value: any) {
    const dialogRef = this.dialog.open(AgentFormComponent, {
      width: '500px',
      data: { record: value },
    });
  }

  delete(data: any) {
    this.userService.deleteagent(data._id).subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.isLoading = false;
        this.getallagent();
        this.cdr.detectChanges();
        this.dialogx.alert(`You have deleted ${data.firstname} ${data.lastname}!`);
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

  openAddDstNumber() {
    let adddailogRef = this.dialog.open(AgentFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      this.getallagent();
      this.getallagent();
      this.getallagent();
      console.log('Dailog Closed');
    });
  }

  changeSelect(e: any) {
    console.log(e);
  }

  changeSort(e: any) {
    console.log(e);
  }

  openAgent() {
    let adddailogRef = this.dialog.open(AgentFormComponent, { width: '500px' });

    adddailogRef.afterClosed().subscribe(() => {
      // this.getallstaff();
      console.log('Dailog Closed');
    });
  }

  getallagents() {
    console.log('requested all agents');
  }

  getallagent() {
    this.userService.getallagent().subscribe(
      (response: any) => {
        console.log('%cips.component.ts line:248 response', 'color: #26bfa5;', response);
        this.list = response.data;
        this.isLoading = false;
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
}

@Component({
  selector: 'agent-form',
  styles: [
    `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: './agent-form.html',
})
export class AgentFormComponent implements OnInit {
  addagentform: FormGroup;
  editmode: Boolean = false;
  id: any;
  hide = true;

  falseValue = 'false';
  trueValue = 'true';

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AgentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addagentform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      password: ['', [Validators.required]],
      approvedstatus: [false],
    });

    if (data) {
      console.log(data);
      this.editmode = true;
      this.id = this.data?.record?._id;
      this.addagentform.setValue({
        firstname: this.data?.record?.firstname ? this.data?.record?.firstname : 'null',
        lastname: this.data?.record?.lastname ? this.data?.record?.lastname : 'null',
        email: this.data?.record?.email ? this.data?.record?.email : 'null',
        mobile: this.data?.record?.mobile ? this.data?.record?.mobile : 'null',
        approvedstatus: this.data?.record?.approvedstatus
          ? this.data?.record?.approvedstatus
          : false,
      });
    }
  }
  ngOnInit(): void {}

  submituserform() {
    console.log(this.addagentform.value);
    if (this.addagentform.valid) {
      this.userService.addagent(this.addagentform.value).subscribe(
        (response: any) => {
          console.log(response);
          this.snackBar.open('Agent Added Successfully!', '', { duration: 2000 });
          this.addagentform.reset();
          this.addagentform.markAsUntouched();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  checkboxChange(checkbox: MatCheckbox, checked: boolean) {
    checkbox.value = checked ? this.trueValue : this.falseValue;
    console.log(checkbox.value);
  }
}
