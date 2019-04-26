import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeacherRouteGuardService implements CanActivate{

  constructor(private router: Router) { }
  canActivate=()=>{
    alert ("your are not supposed to view this page.. redirecting to home");
    this.router.navigate(['home']);
    return false;
  }
}
