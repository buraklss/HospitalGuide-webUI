import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private day:AuthService,
    private root:Router) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.day.getAllUsers().subscribe(data => {
      this.court = data;
    });
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.day.loggedinadmin();
  }
  delete(id: number) {
    console.log("delete id :" + id);
    this.day.deleteuser(id)
    this.root.navigateByUrl("/process")
  }
}
