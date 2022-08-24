import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../../services/student-data.service';


@Component({
  selector: 'app-with-balance',
  templateUrl: './with-balance.component.html',
  styleUrls: ['./with-balance.component.css']
})
export class WithBalanceComponent implements OnInit {

  constructor(public student_data: StudentDataService) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'gender', 'balance'];
  dataSource = this.student_data.student_fee_array.filter(t=>t.balance==true);
}
