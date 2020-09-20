import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { AppointmentService } from 'src/app/service/appointment.service';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-adddays',
  templateUrl: './adddays.component.html',
  styleUrls: ['./adddays.component.css']
})
export class AdddaysComponent implements OnInit {

 
  constructor(
    private root: Router,
    private cilic: AppointmentService,
    private hos:HospitalService,
    private authservice: AuthService
  ) {}
  country: any = {};
  doctors;
  ngOnInit() {
    this.country.status ==true
    this.getdoctor()
  }

  postcountry() {
    this.country.status ==true
    this.cilic.addappday(this.country);
    console.log("post cilinc");
    console.log(this.country);
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
getdoctor(){
  this.hos.getAllDoctors().subscribe(datas=>{
    this.doctors = datas
   
  })
}


  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

}
