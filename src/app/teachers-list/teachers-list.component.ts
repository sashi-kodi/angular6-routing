import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher';
import {StudentsListService} from '../students-list.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers: Teacher[]=[];
  
  constructor(private studentsListService: StudentsListService) { }

  ngOnInit() {
     this.teachers = this.studentsListService.getAllTeachers();
  }

}
