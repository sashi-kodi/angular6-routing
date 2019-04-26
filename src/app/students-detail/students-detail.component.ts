import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentsListService} from '../students-list.service';
import {Student} from '../student';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {
   id: number;
   student: Student;
  constructor(private activatedRoute: ActivatedRoute, private studentsListService: StudentsListService) { }

  ngOnInit() {
  
    this.activatedRoute.params.subscribe((params)=>{
      this.id =+params['id'];
       this.student = this.studentsListService.getStudentDetail(this.id);
    });
     this.activatedRoute.queryParams.subscribe((query)=>{
      console.log(query);
    });
    
  }

}
