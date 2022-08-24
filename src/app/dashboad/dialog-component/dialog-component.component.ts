import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentDataService } from '../../services/student-data.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  studentFee !: FormGroup
  constructor( private diolog: MatDialogRef<DialogComponentComponent> ,private router: Router ,private api : ApiService ,public student_data: StudentDataService , private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.studentFee = this.formBuilder.group({
      student_name : ['',Validators.required],
      gender : ['',Validators.required],
      amount : ['',Validators.required]
    })
  }
  addStudent(){
if(this.studentFee.valid) 
    {
      this.api.postStudentFee(this.studentFee.value).subscribe({next:(res)=>{
        this.studentFee.reset();
        this.diolog.close('save');
        this.router.navigate(['students']);
        },
        error:(res)=>{
          alert(" error occured")
        }
      })
      window.onload   
    }   
  }
}
