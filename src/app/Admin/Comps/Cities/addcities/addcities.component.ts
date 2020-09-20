import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-addcities",
  templateUrl: "./addcities.component.html",
  styleUrls: ["./addcities.component.css"]
})
export class AddcitiesComponent implements OnInit {
  constructor(
    private root: Router,
    private county: CountryserviceService,
    private authservice: AuthService
  ) {}
  country: any = {};
  ulke;
  ngOnInit() {
    this.gelallconut()
  }

  postcountry() {
    this.county.addcities(this.country);
    console.log("post cities");
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }

  gelallconut() {
    this.county.getcountry().subscribe(data => {
      this.ulke = data;
    });
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }
}
