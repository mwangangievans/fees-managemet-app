import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../../services/student-data.service';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor(public student_data: StudentDataService, public api :ApiService ) { }

  ngOnInit(): void {
    this.api.getSrudentFees()
  }
  displayedColumns: string[] = ['id','name', 'gender', 'balance','Action'];
  // dataSource = this.student_data.student_fee_array;
  dataSource = this.api.getSrudentFees();

}
