import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "src/app/service/appointment.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HospitalService } from "src/app/service/hospital.service";
import { DoctorModel } from "src/app/model/doctormodel";
import { AllDaysModel } from "src/app/model/daysmodel";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-listofdaysindoctor",
  templateUrl: "./listofdaysindoctor.component.html",
  styleUrls: ["./listofdaysindoctor.component.css"]
})
export class ListofdaysindoctorComponent implements OnInit {
  constructor(
    private day: AppointmentService,
    private root: Router,
    private hospital: HospitalService,
    private active: ActivatedRoute,private user:AuthService
  ) {}
  days: AllDaysModel[];
  doctor:DoctorModel
  statutype:string
  ngOnInit() {
   
    this.active.params.subscribe(params => {
      this.getdoctordays(params["doctorid"], true);

      this.getdoctor(params["doctorid"]);
    });
  }


  delete(id: number) {
    console.log("delete id :" + id);
    this.day.delappday(id);
    this.root.navigateByUrl("/process");
  }

  getdoctordays(doctorid, statu) {
    this.day.getDaysinDoctoridAndBool(doctorid, statu).subscribe(data => {
      this.days = data;
    });
  }
  getdoctor(doctorid) {
    this.hospital.getoneDoctorid(doctorid).subscribe(data => {
      this.doctor = data;
    });
  }get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
}
