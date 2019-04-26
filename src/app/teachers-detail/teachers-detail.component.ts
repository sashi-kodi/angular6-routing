import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Teacher} from '../teacher';
import {StudentsListService} from '../students-list.service';

@Component({
  selector: 'app-teachers-detail',
  templateUrl: './teachers-detail.component.html',
  styleUrls: ['./teachers-detail.component.css']
})
export class TeachersDetailComponent implements OnInit {
   private fname: string;
   teacher: Teacher;
  constructor(private route: ActivatedRoute, private studentsListService: StudentsListService ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
       this.fname = params['fname'];
       this.teacher =  this.studentsListService.getTeacherDetail(this.fname);
    });
  }

}
