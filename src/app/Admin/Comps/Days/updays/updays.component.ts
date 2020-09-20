import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { AppointmentService } from "src/app/service/appointment.service";
import { HospitalService } from "src/app/service/hospital.service";


@Component({
  selector: "app-updays",
  templateUrl: "./updays.component.html",
  styleUrls: ["./updays.component.css"]
})
export class UpdaysComponent implements OnInit {
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
  country: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
    this.getdoctor();
  }


   getdata(id) {
     this.county.getoneDay(id).subscribe( data => {
      this.country = data;
      console.log("dat2 :");
      console.log(data);

    });
  }

  postcountry() {
    this.county.upappday(this.country);
    console.log(this.country.id);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
}
