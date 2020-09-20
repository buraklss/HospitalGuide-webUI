import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { Users } from "src/app/model/gellusers";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { HospitalService } from "src/app/service/hospital.service";
import { AppointmentService } from "src/app/service/appointment.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private authservice: AuthService,
    private country: CountryserviceService,
    private hos: HospitalService,
    private ran: AppointmentService,
    private app: AppointmentService
  ) {}

  ngOnInit() {
    this.getallusersint();
    this.getallcount();
    this.getallhospital();
    this.gellallcities();
    this.gettotalrandevu();
    this.getalldoktor();
    this.gelallcoment();
    this.getalltrueDAys();
    this.getalltrueHours();
    this.gelallcinis();
  }
  userlengt;
  clengt;
  cities;
  hospital;
  totalrandevu;
  admin;
  comments;
  doctor;
  days;
  hours;
  clinics;

  gelallcinis() {
    this.hos.getClinics().subscribe(data => {
      this.clinics = data.length;
    });
  }
  getalltrueDAys() {
    this.app.getallDaystrue().subscribe(data => {
      this.days = data.length;
    });
  }
  getalltrueHours() {
    this.app.getallHourstruu().subscribe(data => {
      this.hours = data.length;
    });
  }

  getalldoktor() {
    this.hos.getAllDoctors().subscribe(data => {
      this.doctor = data.length;
    });
  }
  gelallcoment() {
    this.hos.GetAllComment().subscribe(dat => {
      this.comments = dat.length;
    });
  }

  logout() {
    this.authservice.logoutadmin();
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  getallusersint() {
    this.authservice.getAllUsers().subscribe(data => {
      this.userlengt = data.length;
    });
  }
  getallcount() {
    this.country.getcountry().subscribe(data => {
      this.clengt = data.length;
    });
  }

  gellallcities() {
    this.country.getallcities().subscribe(data => {
      this.cities = data.length;
    });
  }

  getallhospital() {
    this.hos.getHospitals().subscribe(data => {
      this.hospital = data.length;
    });
  }

  gettotalrandevu() {
    this.ran.getGetAllRandevu().subscribe(data => {
      this.totalrandevu = data.length;
    });
  }
}
