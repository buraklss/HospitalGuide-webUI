import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';
import { AuthService } from 'src/app/service/auth.service';
import { CountryserviceService } from 'src/app/service/countryservice.service';

@Component({
  selector: 'app-uphospitals',
  templateUrl: './uphospitals.component.html',
  styleUrls: ['./uphospitals.component.css']
})
export class UphospitalsComponent implements OnInit {
  getallcities() {
    this.cities.getallcities().subscribe(da => {
      this.citi = da;
    });
  }
citi
  constructor(
    private root: Router,
    private county: HospitalService,
    private cities:CountryserviceService,
    private authservice: AuthService,
    private activeRoute: ActivatedRoute
  ) {}



  country: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
    this.getallcities()
   
  }

  getdata(id) {
    this.county.getoneHospital(id).subscribe(data => {
      this.country = data;
      console.log(data);
    });
  }

  postcountry() {
    this.county.upHospital(this.country);
    console.log(this.country.id);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
}
