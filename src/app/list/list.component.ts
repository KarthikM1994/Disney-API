import { Component, ViewChild, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Disneys } from '../disney.model';
import { Disney } from '../service/disney.service';
import { ViewComponent } from '../view/view.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'name', 'imageUrl', 'actions'];
  dataSource = new MatTableDataSource<Disneys>();

  @ViewChild(MatSort)
  sort!: MatSort;
  getService: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<ViewComponent>, public dialog: MatDialog, private router: Router, private service: Disney,) {

  }
  ngOnInit() {
    this.getData()
  }
  getData() {
    this.service.getDisney().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<Disneys>(data.data);
      this.dataSource.sort = this.sort;
    })
  }

  action(row: any) {
    let _id = row._id;
    let viewData;
    this.service.getDisneyById(_id).subscribe((data: any) => {
      viewData = data;
      const dialogRef = this.dialog.open(ViewComponent, {
        data: { payload: viewData },
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          this.dataSource.sort = this.sort;
        }
      });
    })
  }

}

