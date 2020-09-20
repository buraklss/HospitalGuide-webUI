import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryserviceService } from 'src/app/service/countryservice.service';
import { AuthService } from 'src/app/service/auth.service';
import { AppointmentService } from 'src/app/service/appointment.service';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-addclinic',
  templateUrl: './addclinic.component.html',
  styleUrls: ['./addclinic.component.css']
})
export class AddclinicComponent implements OnInit {

  constructor(
    private root: Router,
    private cilic: HospitalService,
    private authservice: AuthService
  ) {}
  country: any = {};
  ulke;
  ngOnInit() {
    
  }

  postcountry() {
    this.cilic.addClinic(this.country);
    console.log("post cilinc");
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }



  get userauthentication() {
    return this.authservice.loggedinadmin();
  }
}
