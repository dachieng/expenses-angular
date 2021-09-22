import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './users';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService:AuthService, private router : Router) { }
  user = new User()

  public userError



  ngOnInit(): void {
  }

  submit(form:NgForm){
   
    this.authService.createUser(this.user).subscribe(
      ()=> {
        if(form.valid){
        console.log(this.user)
        this.router.navigate(['/users-list'])
        }
      },
      error => {
        console.log(error)
        this.userError = <any>error
      }
    )
     //
  }


  cancel(){
    this.router.navigate(['/users-list'])
  }
}
