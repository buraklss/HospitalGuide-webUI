import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';
import { HospitalService } from 'src/app/service/hospital.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-addhour',
  templateUrl: './addhour.component.html',
  styleUrls: ['./addhour.component.css']
})
export class AddhourComponent implements OnInit {

  constructor(
    private root: Router,
    private cilic: AppointmentService,
    private hos:HospitalService,
    private authservice: AuthService
  ) {}
  country: any = {};
  days;
  ngOnInit() {
    this.country.status ==true
    this.getdoctorandday()
  }

  postcountry() {
    this.country.status ==true
    this.cilic.addapphour(this.country);
    console.log("post hours");
    console.log(this.country);
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
getdoctorandday(){
  this.cilic.getallDaystrue().subscribe(datas=>{
    this.days = datas
   console.log(datas)
  })
}


  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

}
