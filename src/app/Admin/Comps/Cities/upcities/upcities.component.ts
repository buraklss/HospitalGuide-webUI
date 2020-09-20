import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { AuthService } from "src/app/service/auth.service";
import { Cities } from "src/app/model/Cities";

@Component({
  selector: "app-upcities",
  templateUrl: "./upcities.component.html",
  styleUrls: ["./upcities.component.css"]
})
export class UpcitiesComponent implements OnInit {
  constructor(
    private root: Router,
    private county: CountryserviceService,
    private authservice: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  ulke;

  gelallconut() {
    this.county.getcountry().subscribe(data => {
      this.ulke = data;
    });
  }

  country: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
    this.gelallconut();
  }

  getdata(id) {
    this.county.getonecity(id).subscribe(data => {
      this.country = data;
      console.log(data);
    });
  }

  postcountry() {
    this.county.updateCities(this.country);
    console.log(this.country.id);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }

  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
}
