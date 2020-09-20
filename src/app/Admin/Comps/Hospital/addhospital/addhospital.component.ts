import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { HospitalService } from "src/app/service/hospital.service";

@Component({
  selector: "app-addhospital",
  templateUrl: "./addhospital.component.html",
  styleUrls: ["./addhospital.component.css"]
})
export class AddhospitalComponent implements OnInit {
  constructor(
    private root: Router,
    private authservice: AuthService,
    private cities: CountryserviceService,
    private hos: HospitalService
  ) {}
  country: any = {};
  citi;
  ngOnInit() {
    this.getallcities();
  }

  postcountry() {
    this.hos.addHospital(this.country);
    console.log("post conutyr");
    console.log(this.country);
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
  getallcities() {
    this.cities.getallcities().subscribe(da => {
      this.citi = da;
    });
  }
  get userauthentication() {
    return this.authservice.loggedinadmin();
  }
}
