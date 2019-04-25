import { Injectable } from '@angular/core';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsListService {

  private students:Student[];
  constructor() {
    this.students = [ new Student(1, 'sashi', 'rekha', 'sashi@yahoo.com', '9257862469', 'ui'),
    new Student(2, 'veda', 'priya', 'veda@yahoo.com', '9257862468', 'ui'),
    new Student(3, 'bavani', 'ayer', 'ayer@yahoo.com', '9257863369', 'qa'),
    new Student(4, 'hari', 'rekha', 'hari@yahoo.com', '9257624333', 'qa')
    ];
  }
  
  public getAllStudents = ()=>{
    return this.students;
  }
  public getStudentDetail =(id)=>{
    return this.students.find((stud)=> stud.id === id);
  }
}
