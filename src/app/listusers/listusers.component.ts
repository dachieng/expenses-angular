import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  users:any[]
  err:any
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(
      users => this.users = users,
      err  => this.err = err
    )
  }



}
