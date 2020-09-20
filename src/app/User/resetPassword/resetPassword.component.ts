import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-resetPassword",
  templateUrl: "./resetPassword.component.html",
  styleUrls: ["./resetPassword.component.css"]
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private user: AuthService,
    private activatedroute: ActivatedRoute
  ) {}
  resetpassuser: any = {};
  sonuc: any = false;
  message: string;
  mail: string;
  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.mail = params["mail"];
    });
  }

  async resetpassword() {
    this.resetpassuser.Mail = this.mail;
    await this.user.resetPassword(this.resetpassuser).subscribe(data => {
      this.sonuc = data;
      if (this.sonuc == true) {
        this.message = "Password is updated.";
      } else {
        this.message = "Password is not updated.";
      }
    });
  }



  get there(){
    return this.sonuc
  }


}
