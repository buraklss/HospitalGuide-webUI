import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-uphour',
  templateUrl: './uphour.component.html',
  styleUrls: ['./uphour.component.css']
})
export class UphourComponent implements OnInit {

  constructor(
    private root: Router,
    private county: AppointmentService,
    private authservice: AuthService,
    private activeRoute: ActivatedRoute,
    private hos: HospitalService
  ) {}
  
  doctors;
  getdoctor() {
    this.hos.getAllDoctors().subscribe(datas => {
      this.doctors = datas;
    });
  }
  days
  country: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
    this.getdoctor();
    this.getdoctorandday()
  }
  getdoctorandday(){
    this.county.getallDaystrue().subscribe(datas=>{
      this.days = datas
     console.log(datas)
    })
  }

   getdata(id) {
     this.county.getoneHour(id).subscribe( data => {
      this.country = data;
      console.log("dat2 :");
      console.log(data);

    });
  }

  postcountry() {
    this.county.upapphour(this.country);
    console.log(this.country);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
}
