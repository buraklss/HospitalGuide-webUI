import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HoursModel } from 'src/app/model/hourdModel';

@Component({
  selector: 'app-listofhoursindaysid',
  templateUrl: './listofhoursindaysid.component.html',
  styleUrls: ['./listofhoursindaysid.component.css']
})
export class ListofhoursindaysidComponent implements OnInit {

  constructor(
    private active: ActivatedRoute,
    private appsystem: AppointmentService,
    private user: AuthService,
    private root:Router
  ) {}
  hours: HoursModel[];
  userid: number;
dayid:number;
  ngOnInit() {
    
    this.active.params.subscribe(params => {
      this.getallhours(params["dayid"]);
    
      this.dayid = params["dayid"]
      console.log(this.dayid)
      // this.get(params["dayid"])
    });
  }

  getallhours(hid) {
    this.appsystem.getallHoursInDayid(hid).subscribe(data => {
      this.hours = data;
      console.log(data)
    });
  }
  get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }

  delete(id: number) {
    console.log("delete id :" + id);
    this.appsystem.delapphour(id)
    this.root.navigateByUrl("/hourvd")
  }
}
