import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-forgetPassword",
  templateUrl: "./forgetPassword.component.html",
  styleUrls: ["./forgetPassword.component.css"]
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private user: AuthService) {}
  resetuser: any = {};
  ngOnInit() {}
  sonuc: any = false;
  message: String;

  async reset() {
    await this.user.forgotpassword(this.resetuser).subscribe(data => {
      this.sonuc = data;
      if (this.sonuc == true) {
        this.message = "Mail sending successful.";
      } else {
        this.message = "Mail not registered in the system";
      }
    });
  }



  get there(){
    return this.sonuc
  }
}
