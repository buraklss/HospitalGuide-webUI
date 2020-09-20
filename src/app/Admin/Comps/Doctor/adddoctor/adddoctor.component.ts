import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { HospitalService } from "src/app/service/hospital.service";
import { HosClinicsTodoctorModel } from "src/app/model/hosClinictoDoctormodel";
import { AlertifyService } from "src/app/service/alertify.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-adddoctor",
  templateUrl: "./adddoctor.component.html",
  styleUrls: ["./adddoctor.component.css"]
})
export class AdddoctorComponent implements OnInit {
  constructor(
    private root: Router,
    private authservice: AuthService,
    private hos: HospitalService,
    private http: HttpClient
  ) {}

  country: any = {};
  citi;
  cil;
  hoscilid;
  ngOnInit() {
    this.getallcities();
    this.getcilinic();
  }
  ngOnChanges() {
    this.gethosclinicid();
  }

  postcountry() {
    console.log(`sdfsdf`+ this.hoscilid)
    this.country.hospitalClinicId = this.hoscilid.id;
    console.log(this.country.hospitalClinicId)
    if (this.country.hospitalClinicId != null) {
   
      this.hos.adddoctor(this.country);
      console.log("post dostorc");
      console.log(this.country);
    }
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
  getallcities() {
    this.hos.getHospitals().subscribe(da => {
      this.citi = da;
    });
  }
  getcilinic() {
    this.hos.getClinics().subscribe(data => {
      this.cil = data;
    });
  }

  gethosclinicid() {
    if (
      (this.country.hospital != undefined, this.country.clinic != undefined)
    ) {
      console.log(this.country.hospital, this.country.clinic);
      this.hos
        .getHospitalClinic(this.country.hospital, this.country.clinic)
        .subscribe(data => {
          console.log(data);

          if (data != null) {
            setTimeout(() => {
              this.hoscilid = data;
            }, 200);
          } else {
            var hosclinic = new HosClinicsTodoctorModel();
            hosclinic.ClinicId = this.country.clinic;
            hosclinic.HospitalId = this.country.hospital;

            this.addHospitalClinics(hosclinic);
          }
        });
    }
  }
  path = "http://localhost:49526/api/Clinics/";
  addHospitalClinics(add: HosClinicsTodoctorModel) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "addHospitalClinicse", add, { headers: headers })
      .subscribe(data => {
        this.hoscilid = data;
        console.log("conmpe içi font data");
        console.log(data);
        console.log(data.valueOf());
      });
  }
  get userauthentication() {
    return this.authservice.loggedinadmin();
  }
}
