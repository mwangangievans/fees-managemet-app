import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AllStudentsComponent } from './dashboad/all-students/all-students.component';
import { WithBalanceComponent } from './dashboad/with-balance/with-balance.component';
import { WithoutBalanceComponent } from './dashboad/without-balance/without-balance.component';
import { AddStudentComponent } from './dashboad/add-student/add-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard } from '../app/auth.guard'





const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'students',  component: HomeComponent, canActivate : [
    AuthGuard
  ],
  children:[
    { path: '', component: AllStudentsComponent },
    { path: 'with-balance', component: WithBalanceComponent },  
    { path: 'without-balance', component: WithoutBalanceComponent }

] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
