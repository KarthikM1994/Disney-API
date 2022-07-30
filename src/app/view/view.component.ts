import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Disney } from '../service/disney.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  getDisney: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ViewComponent>, public dialog: MatDialog, private getService: Disney, private router: Router) {
    this.getDisney = this.data.payload;
  }

  ngOnInit(): void {

  }

  discard() {
    this.dialogRef.close()
  }
}
