import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { AppointmentService } from "src/app/service/appointment.service";
import { UserRandevuModel } from "src/app/model/userrandeuvuModel";
import { RandevuModel } from "src/app/model/randuvuModel";
import { AlertifyService } from "src/app/service/alertify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private user: AuthService,
    private appsystem: AppointmentService,private alertify:AlertifyService,
    private root:Router
  ) {}
  profileuser: any = {};
  userid: any;
  usermail: any;
  randevularim: UserRandevuModel[];
  ngOnInit() {
    this.userid = this.user.getcurrentuserid;
    this.usermail = this.user.getcurrentusermail;
    this.getuser(this.userid);
    this.getrandevu(this.userid)
  }

  getuser(id: number) {
    this.user.getuser(id).subscribe(data => {
      this.profileuser = data;
      console.log(data);
    });
  }

  updateProfile() {
    this.profileuser.id = this.userid;
    this.user.updateuser(this.profileuser);
  }

  getrandevu(id) {
    this.appsystem.getUserRandevu(id).subscribe(data => {
      this.randevularim = data;
      console.log(data)
    });
  }

  deleterandevu(randevu){

    this.appsystem.delrandevunotsub(randevu).subscribe(data=>{
      this.alertify.success("Deleted randevu")
      this.root.navigateByUrl("/profile")
    })
    this.root.navigateByUrl("/process")
  }
}
