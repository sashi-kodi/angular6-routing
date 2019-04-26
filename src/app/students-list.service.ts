import { Injectable } from '@angular/core';
import {Student} from './student';
import {Teacher} from './teacher';

@Injectable({
  providedIn: 'root'
})
export class StudentsListService {

  private students:Student[];
  private teachers: Teacher[];
  
  constructor() {
    this.students = [ new Student(1, 'sashi', 'rekha', 'sashi@yahoo.com', '9257862469', 'lkg'),
    new Student(2, 'veda', 'priya', 'veda@yahoo.com', '9257862468', 'kg'),
    new Student(3, 'bavani', 'ayer', 'ayer@yahoo.com', '9257863369', 'kg'),
    new Student(4, 'hari', 'rekha', 'hari@yahoo.com', '9257624333', 'lkg')
    ];
    this.teachers = [ new Teacher( 'shilp', 'charya', 'lkg', '88888888'), new Teacher( 'haresh', 'hari', 'kg', '5555555'),new Teacher( 'meenu', 'rakesh', 'lkg', '77777777'), new Teacher( 'bhoomi', 'charya', 'kg', '2222222222')
   
    ];
  }
  
  public getAllStudents = ()=>{
    return this.students;
  }
  public getAllTeachers = ()=>{
    return this.teachers;
  }
  public getStudentDetail =(id)=>{
    return this.students.find((stud)=> stud.id === id);
  }
  public getTeacherDetail =(fname:string)=>{
    return this.teachers.find((teach)=> teach.fname === fname);
  }
}
