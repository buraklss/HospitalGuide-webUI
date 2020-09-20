import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dayslist',
  templateUrl: './dayslist.component.html',
  styleUrls: ['./dayslist.component.css']
})
export class DayslistComponent implements OnInit {

  constructor(private day:AppointmentService,
    private root:Router,private user:AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.day.getallDays().subscribe(data => {
      this.court = data;
      console.log(data)
    });
  }

  delete(id: number) {
    console.log("delete id :" + id);
    this.day.delappday(id)
    this.root.navigateByUrl("/process")
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
}
