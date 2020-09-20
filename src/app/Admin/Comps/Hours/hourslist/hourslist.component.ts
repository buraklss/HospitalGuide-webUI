import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-hourslist',
  templateUrl: './hourslist.component.html',
  styleUrls: ['./hourslist.component.css']
})
export class HourslistComponent implements OnInit {

  constructor(private day:AppointmentService,
    private root:Router,
    private user:AuthService) {}

  ngOnInit() {
    this.getc();
  }
  court;

  getc() {
    this.day.getallhours().subscribe(data => {
      this.court = data;
      console.log(data)
    });
  }

  delete(id: number) {
    console.log("delete id :" + id);
    this.day.delapphour(id)
    this.root.navigateByUrl("/process")
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
}
