import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HosClinicsTodoctorModel } from 'src/app/model/hosClinictoDoctormodel';
import { s } from '@angular/core/src/render3';

@Component({
  selector: 'app-updoctor',
  templateUrl: './updoctor.component.html',
  styleUrls: ['./updoctor.component.css']
})
export class UpdoctorComponent implements OnInit {
  citi;
  cil;
  hoscilid;

  constructor(
    private root: Router,
    private county: HospitalService,
    private authservice: AuthService,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private hos: HospitalService,
  ) {}
  ngOnChanges() {
    this.gethosclinicid();
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
  country: any = {};
  country1: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
    
  }

  getdata(id) {
    this.county.getonedoctor(id).subscribe(data => {
      this.country1 = data;
      console.log(data);
      this.cot()
    });
  }

  cot(){
   this.country.id= this.country1[0].id 
   this.country.clinic = this.country1[0].clinic 
   this.country.gender = this.country1[0].gender 
   this.country.clinicId= this.country1[0].clinicId 
   this.country.hospitalClinicId =this.country1[0].hospitalClinic 
   this.country.hospitalId = this.country1[0].hospitalId 
   this.country.hospital= this.country1[0].hospitalName 
   this.country.name =this.country1[0].name 
   this.country.surname  =this.country1[0].surname 
   this.country.title = this.country1[0].title 
   console.log("cot:")
   console.log(this.country)
   this.getallcities();
    this.getcilinic();
  }
  postcountry() {
    this.county.updoctor(this.country);
    console.log(this.country.id);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }

}
