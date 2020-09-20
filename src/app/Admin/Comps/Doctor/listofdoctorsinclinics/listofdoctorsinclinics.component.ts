import { Component, OnInit } from "@angular/core";
import { HospitalService } from "src/app/service/hospital.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HosClinicsTodoctorModel } from "src/app/model/hosClinictoDoctormodel";
import { DoctorModel } from "src/app/model/doctormodel";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-listofdoctorsinclinics",
  templateUrl: "./listofdoctorsinclinics.component.html",
  styleUrls: ["./listofdoctorsinclinics.component.css"]
})
export class ListofdoctorsinclinicsComponent implements OnInit {
  constructor(
    private day: HospitalService,
    private active: ActivatedRoute,
    private root: Router,private user:AuthService
  ) {}
  hospitalid: number;
  clinicid: number;
  hosClinicTabla: HosClinicsTodoctorModel;
  doctors: DoctorModel[];
  ngOnInit() {
   
    this.active.params.subscribe(params => {
      this.gethospitalclinic(params["hosid"], params["clinicid"]);
      this.hospitalid = params["hosid"];
      this.clinicid = params["clinicid"];
    });

    setTimeout(() => {
      this.gethoscliindoctor(this.hosClinicTabla.id);
      console.log("hoscliİD:" + this.hosClinicTabla.id);
    }, 200);
  }
  gethoscliindoctor(hosclininId) {
    this.day.GetOneHosAndOneClinicInDoctors(hosclininId).subscribe(data => {
      this.court = data;
      //console.log(data)
    });
  }
  gethospitalclinic(hosid, clinicid) {
    this.day.getHospitalClinic(hosid, clinicid).subscribe(data => {
      this.hosClinicTabla = data;
  
    });
  }

  court;


  delete(id: number) {
    console.log("delete id :" + id);
    this.day.deldoctor(id);
    this.root.navigateByUrl("/process");
  } get userauthentication()
  {

    //,private user:AuthService
    return this.user.loggedinadmin();
  }
}
