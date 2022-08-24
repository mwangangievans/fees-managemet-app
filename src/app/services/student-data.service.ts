import { Injectable } from '@angular/core';
 
export interface feesData  {
  id:number;
  name: string;
  gender: string;
  balance: boolean;
  amount?:number
}

@Injectable({
  providedIn: 'root'
})

export class StudentDataService {

  username = "";
  password = "";
  errorMsg = "";

 student_fee_array : feesData[] = [
  {id:Math.floor(Math.random() * 1000000000),name:"evans",gender:"male",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"tonny",gender:"male",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"ken",gender:"male",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"martin",gender:"male",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"ruby",gender:"female",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"rose",gender:"female",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"jonathan",gender:"male",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"evans",gender:"male",balance:false},
  {id:Math.floor(Math.random() * 1000000000),name:"mercy",gender:"female",balance:false},
  {id:Math.floor(Math.random() * 1000000000),name:"john",gender:"male",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"ben",gender:"male",balance:false},
  {id:Math.floor(Math.random() * 1000000000),name:"jemmy",gender:"female",balance:false},
  {id:Math.floor(Math.random() * 1000000000),name:"jossy",gender:"female",balance:true,amount:34.896},
  {id:Math.floor(Math.random() * 1000000000),name:"evans",gender:"male",balance:true,amount:34.896},
]
  constructor() { }
  
  deleteStudent(id:number){
  const item_to_delete = this.student_fee_array.filter(t=>t.id==id);
  const arr = this.student_fee_array.filter(item => item.id !== id)
  console.log(arr);
  if (item_to_delete[id]) {
  this.student_fee_array.splice(id, 1); 
 }

 
}


}