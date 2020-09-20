import { Component, OnInit, SimpleChanges } from "@angular/core";
import { HospitalService } from "src/app/service/hospital.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Clinics } from "src/app/model/clinics";
import { AuthService } from "src/app/service/auth.service";
import { HosClinicsTodoctorModel } from "src/app/model/hosClinictoDoctormodel";
import { DoctorModel } from "src/app/model/doctormodel";
import { AppointmentService } from "src/app/service/appointment.service";
import { AllDaysModel } from "src/app/model/daysmodel";
import { HoursModel } from "src/app/model/hourdModel";
import { HoursinDayidModel } from "src/app/model/hosurdayid";
import { RandevuModel } from "src/app/model/randuvuModel";

@Component({
  selector: "app-clinics",
  templateUrl: "./clinics.component.html",
  styleUrls: ["./clinics.component.css"]
})
export class ClinicsComponent implements OnInit {
  constructor(
    private hospital: HospitalService,
    private active: ActivatedRoute,
    private user: AuthService,
    private appsystem: AppointmentService,
    private root: Router
  ) {}

  hospitalid: number;
  userid: number;
  gethospital: any = {};

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.gethospitalClinis(params["hosid"]);
      this.getcurrentuserid();
      this.hospitalid = params["hosid"];
    });
  }

  hos;
  dayid: number;
  days: AllDaysModel[];
  doctors: DoctorModel[];
  clinics: Clinics[];
  onedoctor:DoctorModel[]
  hours: HoursinDayidModel[];
  hosClinicTabla: HosClinicsTodoctorModel;
  gethospitalClinis(hosid) {
    this.hospital.GetOneHospitalsClinics(hosid).subscribe(data => {
      this.clinics = data;
    });
    this.hospital.getoneHospital(hosid).subscribe(data => {
      this.hos = data;
    });
  }
  dayyy:AllDaysModel
  hourrr:HoursModel
   modell = new RandevuModel();
  getapp(d: HoursinDayidModel) {

    this.modell.UserId = this.userid;
    this.modell.HourId = d.id;
    this.modell.dayid = d.dayId;
   
    console.log("doktorid " + d.day.doctorId)
  this.appsystem.getoneDay(d.dayId).subscribe(data=>{
this.dayyy = data
  })
  this.appsystem.getoneHour(d.id).subscribe(data=>{
this.hourrr =data
  })
 this.hospital.getDoctoridfor(d.day.doctorId).subscribe(data=>{
   this.onedoctor = data
   console.log(data)
 })
   
  }

  getappset(){
    console.log("randevu al")
    console.log(this.modell)
    setTimeout(() => {
      this.appsystem.addrandevu(this.modell)
  
    }, 500);
   
   
  }

  gethours(e) {
  console.log(e);
    this.gethourss(e.id);
    this.dayid = e.id;
  }

  getdays(e) {
    this.getdoctordays(this.gethospital.did, true);
  }
  gethourss(e) {
    this.appsystem.getHoursinDayidAndBool(e, true).subscribe(data => {
      this.hours = data;
      console.log(data);
    

    });
  }

  getdoctordays(doctorid, statu) {
    this.appsystem.getDaysinDoctoridAndBool(doctorid, statu).subscribe(data => {
      this.days = data;
    });
  }
  getcurrentuserid() {
    this.userid = parseInt(this.user.getcurrentuserid);
  }
  getd(e) {
    this.gethospitalclinic(this.hospitalid, this.gethospital.id);

    setTimeout(() => {
      this.gethoscliindoctor(this.hosClinicTabla.id);
    }, 500);
  }

  gethoscliindoctor(hosclininId) {
    this.hospital
      .GetOneHosAndOneClinicInDoctors(hosclininId)
      .subscribe(data => {
        this.doctors = data;
      });
  }
  gethospitalclinic(hosid, clinicid) {
    if (
      hosid != null ||
      hosid != undefined ||
      clinicid != null ||
      clinicid != undefined
    ) {
      this.hospital.getHospitalClinic(hosid, clinicid).subscribe(data => {
        this.hosClinicTabla = data;
      });
    }
  }

  get data() {
    if (this.clinics != null) {
      if (this.clinics.length <= 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
