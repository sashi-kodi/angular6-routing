import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentsListService} from '../students-list.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[]=[];

  constructor(private studentsService: StudentsListService) { }

  ngOnInit() {
  
    this.students = this.studentsService.getAllStudents();
  }

}
