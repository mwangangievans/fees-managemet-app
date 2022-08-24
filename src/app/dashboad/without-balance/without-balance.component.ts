import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../../services/student-data.service';


@Component({
  selector: 'app-without-balance',
  templateUrl: './without-balance.component.html',
  styleUrls: ['./without-balance.component.css']
})
export class WithoutBalanceComponent implements OnInit {
  constructor(public student_data: StudentDataService) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'gender', 'balance'];
  dataSource = this.student_data.student_fee_array.filter(t=>t.balance==false);

}
