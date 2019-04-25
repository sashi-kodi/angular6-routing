import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentsListComponent} from './students-list/students-list.component';
import {StudentsDetailComponent} from './students-detail/students-detail.component';
 
const routes: Routes = [
{
  path:'home', component:HomeComponent
},
{
  path:'students', component:StudentsListComponent
 
},
{
  path:'students/:id', component: StudentsDetailComponent
},
{
  path:'', redirectTo:'/home', pathMatch:'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
