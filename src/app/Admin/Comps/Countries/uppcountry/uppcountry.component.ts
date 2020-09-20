import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CountryserviceService } from "src/app/service/countryservice.service";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-uppcountry",
  templateUrl: "./uppcountry.component.html",
  styleUrls: ["./uppcountry.component.css"]
})
export class UppcountryComponent implements OnInit {
  constructor(
    private root: Router,
    private county: CountryserviceService,
    private authservice: AuthService,
    private activeRoute: ActivatedRoute
  ) {}

  country: any = {};
  paramid;
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      (this.paramid = params["id"]), this.getdata(params["id"]);
    });
  }

  getdata(id) {
    this.county.getonecountry(id).subscribe(data => {
      this.country = data;
      console.log(data);
    });
  }

  postcountry() {
    this.county.updateCountry(this.country);
    console.log(this.country.id);
  }

  get userauthentication() {
    return this.authservice.loggedinadmin();
  }
  handleFileInput(a) {
    console.log(a);
    var sp = a.split("h\\", 2);

    this.country.flagimage = "assets\\" + sp[1];

    console.log(this.country.flagimage);
  }
  cancel() {
    this.root.navigateByUrl("/dashboard");
  }
}
