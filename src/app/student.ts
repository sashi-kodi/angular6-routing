export class Student {
  id: number;
 private fname: string;
 private lname: string;
 private email: string;
 private phone: string;
 private batch: string;
 
 constructor(id, fname, lname, email, phone, batch){
   this.id=id;
   this.fname=fname;
   this.lname =lname;
   this.email = email;
   this.phone = phone;
   this.batch = batch;
 }
}
