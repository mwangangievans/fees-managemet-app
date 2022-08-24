import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../services/student-data.service';
import { feesData } from '../services/student-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponentComponent} from '../dashboad/dialog-component/dialog-component.component';





@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {
 students =[];

  constructor(public student_data: StudentDataService ,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogComponentComponent, {
     width:"30%"
    });
  }
}
